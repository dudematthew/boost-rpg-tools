export default class Randomizer {

    /**
     * Allows efficient use of www.random.org true
     * random numbers with ability to store numbers
     * in memory in advance for next calls
     * 
     * TODO: add checking if quota is used up from API
     * https://www.random.org/quota/?format=plain
     * 
     * @param {int} randomNumbersKeepAmount how
     * many numbers to refill to memory in one
     * number set
     * @param {int} neededPercentToRefill how
     * low amount of numbers in memory in one
     * set is needed to refill
     */
    constructor(randomNumbersKeepAmount = 20, neededPercentToRefill = 20) {
        this.randomNumbersKeepAmount = randomNumbersKeepAmount;
        this.neededPercentToRefill = neededPercentToRefill;
        this.randomNumberSet = [];
        this.requestPending = false;
        this.currentlyReffiling = false;
    }

    /**
     * Get random number between two points
     * @param {int} from random number minimum value
     * @param {int} to random number maximum value
     * @param {int} keepAmount how many random numbers
     * to keep in memory
     */
    async getRandomNumber(from = 0, to = 1, keepAmount = this.randomNumbersKeepAmount) {
        console.log(`Requested | ${from} | ${to} | ${keepAmount}`);

        if (this.randomNumberSet.length != 0) {
            if (this.randomNumberSet.length <= keepAmount * (this.neededPercentToRefill / 100)) {
                await this.waitForRequestFinish();
                this.refillRandomNumbers(keepAmount);
            }
            console.log("Random number popping... Currently ", this.randomNumberSet);
            return Math.floor(parseFloat(this.randomNumberSet.pop()) * to) + from;
        } else {
            await this.waitForRequestFinish();
            await this.refillRandomNumbers(keepAmount);
            
            return await this.getRandomNumber(from, to, keepAmount);
        }
    }

    /**
     * Returns true when current request is finished
     * @returns {boolean}
     */
    async waitForRequestFinish () {
        while (true) {
            if (!this.requestPending)
                return true;
            else
                console.log("Not finished, retrying...");
            await new Promise(r => setTimeout(r, 100));
        }
    }

    /**
     * Refill saved number sets
     * @param {int} keepAmount how 
     */
    async refillRandomNumbers(keepAmount = this.randomNumbersKeepAmount) {

        // Check if there is an ongoing reffil with same random numbers
        if (this.currentlyReffiling || this.requestPending) {
            console.log("Reffiling aborted. Currently random numbers are being reffiled.");
            return 1;
        } else {
            console.log("Refilling needed.");
        }

        // Indicate global reffiling info
        this.currentlyReffiling = true;

        // Calculate amount of numbers that
        // needs to be fetched
        let amount = (keepAmount - this.randomNumberSet.length);
        console.log("Amount to fill: ", amount);
        
        // Amount has to be greater than x percent
        if (amount <= this.randomNumbersKeepAmount * (this.neededPercentToRefill / 100)) {
            console.log("Amount is too low: ", amount);
            this.currentlyReffiling = false;
            return 0;
        }

        let randomNumbers = await this.fetchRandomNumbers(amount);


        if (randomNumbers != null) {
            this.randomNumberSet = this.randomNumberSet.concat(randomNumbers);
        }

        console.log("Refill done, currently: ", this.randomNumberSet);
        // Indicate refill completion
        this.currentlyReffiling = false;
        
        return 1;
    }

    on(eventName, callbackFunction) {
        switch (eventName) {
            case "connection-error":
                this.connectionError = callbackFunction;
                break;

            case "fetch-start":
                this.fetchStart = callbackFunction;
                break;

            case "fetch-end":
                this.fetchEnd = callbackFunction;
                break;

            default:
                console.error("There is no event name called " + eventName);
        }
    }

    makeRequest(method, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    }

    /**
     * Gets specific amount of random numbers from
     * www.random.org api
     * @param {int} amount amount of numbers to fetch
     * @returns {array} array of random numbers
     */
    async fetchRandomNumbers(amount) {

        console.log(`Starting fetching ${amount} numbers`);
        
        let randomNumbers = null;
        let randomizer = this;

        this.requestPending = true;
        this.fetchStart(amount);
        await this.makeRequest('GET', "https://www.random.org/decimal-fractions/?dec=20&num=" + amount + "&col=1&format=plain")
        .then(function (data) {
            randomNumbers = data.trim().split('\n');
            randomizer.fetchEnd(randomNumbers);
        })
        .catch(function (err) {
            randomizer.connectionError(err);
        });
        this.requestPending = false;


        return randomNumbers;
    }

    // Activated on connection error
    connectionError (error = "") {
        console.error("There has been an error connecting to www.random.org: " + error);
    }

    // Activated on fetching start
    fetchStart (amount) {
        console.log(`Starting fetching ${amount} numbers`);
    }

    // Activated on fetching errorless finish
    fetchEnd (randomNumbers) {
        console.log(`Finished fetching: `, randomNumbers);
    }
}