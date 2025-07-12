<script>
import { marked } from 'marked'
import DOMPurify from 'dompurify'

export default {
    name: 'FeedbackModal',
    data() {
        return {
            active: false,
            isSubmitting: false,
            isSuccess: false,
            isError: false,
            errorMessage: '',
            showPreview: false,
            charactersAllowed: 3000,
            formData: {
                email: '',
                feedback: ''
            }
        }
    },
    computed: {
        isFormValid() {
            return this.formData.email.length > 0 &&
                this.formData.feedback.length > 0 &&
                this.formData.feedback.length <= this.charactersAllowed &&
                this.isValidEmail(this.formData.email);
        },

        remainingCharacters() {
            return this.charactersAllowed - this.formData.feedback.length;
        },

        previewHtml() {
            if (!this.formData.feedback) {
                return '';
            }
            try {
                // Configure marked to handle line breaks more intuitively
                marked.setOptions({
                    breaks: true,        // Convert single line breaks to <br>
                    gfm: true,          // GitHub Flavored Markdown
                    smartypants: true   // Use smart quotes and dashes
                });

                // Parse markdown to HTML
                const rawHtml = marked.parse(this.formData.feedback);

                // Sanitize HTML to prevent XSS attacks
                const cleanHtml = DOMPurify.sanitize(rawHtml, {
                    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'hr'],
                    ALLOWED_ATTR: ['href'],
                    FORBID_ATTR: ['style', 'onclick', 'onload', 'onerror', 'onmouseover'],
                    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'textarea', 'button']
                });

                return cleanHtml;
            } catch (error) {
                console.error('Markdown parsing error:', error);
                return '<p>Błąd podczas przetwarzania markdown</p>';
            }
        }
    },
    methods: {
        // Reset data and show the modal
        show() {
            this.active = true;
            this.isSubmitting = false;
            this.isSuccess = false;
            this.isError = false;
            this.errorMessage = '';
            this.showPreview = false;
            this.formData = {
                email: '',
                feedback: ''
            };

        },

        // Emits interface to parent
        emitInterface() {
            this.$emit("interface", {
                showFeedbackModal: () => this.show()
            });
        },

        // Validate email format
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        // Submit feedback to API
        async submitFeedback() {
            if (!this.isFormValid) {
                return;
            }

            this.isSubmitting = true;
            this.isError = false;
            this.errorMessage = '';

            try {
                const response = await this.makeApiRequest();

                if (response.status === 'success') {
                    this.isSuccess = true;
                } else {
                    this.isError = true;
                    this.errorMessage = response.message || 'Wystąpił błąd podczas wysyłania opinii.';
                }
            } catch (error) {
                this.isError = true;
                this.errorMessage = 'Wystąpił błąd podczas wysyłania opinii. Spróbuj ponownie.';
                console.error('Feedback submission error:', error);
            } finally {
                this.isSubmitting = false;
            }
        },

        // Make API request
        makeApiRequest() {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                const url = 'https://feedback.dudematthew.smallhost.pl/index.php';

                const formData = new FormData();
                formData.append('project_key', 'boost_rpg');
                formData.append('email', this.formData.email);
                formData.append('feedback', this.formData.feedback);

                xhr.open('POST', url);

                xhr.onload = function () {
                    try {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(new Error('Invalid response format'));
                    }
                };

                xhr.onerror = function () {
                    reject(new Error('Network error'));
                };

                xhr.send(formData);
            });
        },



        // Toggle preview
        togglePreview() {
            this.showPreview = !this.showPreview;
        },

        // Close modal
        close() {
            this.active = false;
        }
    },
    watch: {
        active: function (val) {
            document.querySelector("html").classList.toggle("is-clipped", val);
        }
    },
    mounted() {
        // Emits on mount
        this.emitInterface();
    }
}
</script>

<template>
    <div class="modal" :class="{'is-active': active}">
        <div class="modal-background" @click="close()"></div>

        <div class="modal-content">
            <header class="modal-card-head">
                <p class="modal-card-title">Prześlij opinię</p>
                <button class="delete" @click="close()"></button>
            </header>

            <section class="modal-card-body" v-if="!isSuccess">
                <p class="has-text-black title is-4 is-spaced">Podziel się swoją opinią</p>
                <p class="has-text-black subtitle is-6">Pomóż mi ulepszyć BOOST lub aplikację!</p>

                <div class="mb-5 control">
                    <div class="field">
                        <label class="has-text-black label">Adres email</label>
                        <div class="control">
                            <input class="input is-medium" type="email" placeholder="twoj@email.com"
                                v-model="formData.email"
                                :class="{ 'is-danger': formData.email.length > 0 && !isValidEmail(formData.email) }">
                        </div>
                        <p class="has-text-white help is-danger"
                            v-if="formData.email.length > 0 && !isValidEmail(formData.email)">
                            Wprowadź prawidłowy adres email
                        </p>
                    </div>
                </div>

                <div class="mb-3 control">
                    <div class="field">
                        <label class="has-text-black label">Twoja opinia</label>
                        <div class="control">
                            <textarea class="textarea is-medium"
                                placeholder="Podziel się swoją opinią o BOOST lub aplikacji..."
                                v-model="formData.feedback" :class="{ 'is-danger': formData.feedback.length > 1000 }"
                                rows="6"></textarea>
                        </div>
                        <p class="has-text-black help"
                            :class="{ 'is-danger': remainingCharacters < 0, 'has-text-white': remainingCharacters < 0 }">
                            Pozostało znaków: {{ remainingCharacters }}
                        </p>
                        <p class="has-text-black help is-info">
                            Możesz używać składni <a
                                href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
                                target="_blank">Markdown</a> (nagłówki, pogrubienia, linki itp.)
                        </p>
                    </div>
                </div>

                <!-- Accordion Preview Section -->
                <div class="mb-3 control" v-if="formData.feedback.length > 0">
                    <div class="field">
                        <div class="card">
                            <header class="card-header" @click="togglePreview()" style="cursor: pointer;">
                                <p class="has-text-white card-header-title">
                                    {{ showPreview ? 'Ukryj podgląd' : 'Pokaż podgląd' }}
                                </p>
                                <button class="card-header-icon" aria-label="toggle preview">
                                    <span class="icon">
                                        <i class="fas fa-angle-down" aria-hidden="true"
                                            :class="{ 'fa-rotate-180': showPreview }"></i>
                                    </span>
                                </button>
                            </header>
                            <div class="card-content" :class="{ 'is-hidden': !showPreview }">
                                <div class="content">
                                    <p class="mb-3 has-text-white subtitle is-6">Podgląd twojej opinii:</p>
                                    <div class="preview-content" v-html="previewHtml"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="notification is-danger" v-if="isError">
                    <span class="has-text-white">{{ errorMessage }}</span>
                </div>
            </section>

            <section class="modal-card-body" v-if="isSuccess">
                <div class="notification is-success">
                    <h4 class="has-text-black title is-4">Dziękuję!</h4>
                    <p class="has-text-black">Twoja opinia została wysłana. Dziękuję za pomoc!</p>
                </div>
            </section>

            <footer class="modal-card-foot" v-if="!isSuccess">
                <button class="button is-success" @click="submitFeedback()" :disabled="!isFormValid || isSubmitting"
                    :class="{ 'is-loading': isSubmitting }">
                    <span v-if="!isSubmitting">Wyślij opinię</span>
                </button>
                <button class="button" @click="close()">Anuluj</button>
            </footer>

            <footer class="modal-card-foot" v-if="isSuccess">
                <button class="button is-success" @click="close()">Zamknij</button>
            </footer>
        </div>
    </div>
</template>

<style>
/* Feedback Modal Specific Styles */
.modal .textarea {
    resize: vertical;
    min-height: 120px;
}

.modal .preview-content {
    max-height: 300px;
    overflow-y: auto;
    padding: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background-color: #fafafa;
    color: #000000 !important;
}

.modal .preview-content h1,
.modal .preview-content h2,
.modal .preview-content h3,
.modal .preview-content h4,
.modal .preview-content h5,
.modal .preview-content h6 {
    color: #363636 !important;
    margin-bottom: 0.5rem;
}

.modal .preview-content p,
.modal .preview-content li,
.modal .preview-content span {
    color: #4a4a4a !important;
}

.modal .preview-content code {
    background-color: #f5f5f5;
    color: #da1039 !important;
    padding: 0.2em 0.4em;
    border-radius: 3px;
}

.modal .preview-content pre {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
}

.modal .preview-content pre code {
    background-color: transparent;
    color: #4a4a4a !important;
    padding: 0;
}

.modal .preview-content blockquote {
    border-left: 4px solid #dbdbdb;
    padding-left: 1rem;
    margin-left: 0;
    font-style: italic;
    color: #ebe0e0 !important;
}

.modal a:hover {
    color: #000000 !important;
    text-decoration: underline;
}


.modal .preview-content blockquote p {
    color: #ebe0e0 !important;
}

.modal .preview-content ul,
.modal .preview-content ol {
    margin-left: 1rem;
}

.modal .preview-content a {
    color: #3273dc !important;
}

.modal .preview-content strong {
    color: #363636 !important;
    font-weight: 600;
}

.modal .preview-content em {
    color: #4a4a4a !important;
    font-style: italic;
}

.modal .preview-content br {
    display: block;
    content: "";
    margin-top: 0.5rem;
}

.modal .preview-content p {
    margin-bottom: 0.75rem;
    line-height: 1.5;
    white-space: pre-wrap;
}

/* Feedback Modal Card Accordion Animation */
.modal .card-content {
    transition: all 0.3s ease;
}

.modal .card-header-icon .icon i {
    transition: transform 0.3s ease;
}

.modal .fa-rotate-180 {
    transform: rotate(180deg);
}
</style>