// ===========================================
// Chat Search Application - Vercel Version
// ===========================================

// ===========================================
// Translation System
// ===========================================
const translations = {
    en: {
        pageTitle: "💬 Chat Conversation Search",
        apiKeySet: "API Key Set",
        searchFilters: "🔍 Search Filters",
        userNS: "🆔 User NS *",
        userNSPlaceholder: "Enter User NS (e.g., f180949u355983953)",
        includeBot: "🤖 Include Bot Messages",
        dateRange: "📅 Date Range",
        startDate: "Start Date",
        endDate: "End Date",
        resultsPerPage: "📄 Results per Page",
        searchConversations: "🔍 Search Conversations",
        clearSearch: "🗑️ Clear Search",
        chatMessages: "💬 Chat Messages",
        noMessagesToDisplay: "No messages to display. Please search for conversations.",
        liveKeywordSearch: "🔍 Live Keyword Search",
        liveKeywordPlaceholder: "Type to search messages...",
        noMessagesFound: "No messages found containing \"{keyword}\"",
        tryDifferentSearch: "Try a different search term or check your spelling",
        previous: "« Previous",
        next: "Next »",
        showing: "Showing {from}-{to} of {total} messages",
        exportResults: "Export",
        apiKeyRequired: "API Key Required",
        enterApiKey: "Enter Your API Key",
        pasteApiKey: "Paste your API key here...",
        apiKeySecurityNote: "Your API key is stored locally and never sent to our servers",
        saveApiKey: "Save API Key"
    },
    ar: {
        pageTitle: "💬 البحث في محادثات الدردشة",
        apiKeySet: "مفتاح API محدد",
        searchFilters: "🔍 مرشحات البحث",
        userNS: "🆔 معرف المستخدم *",
        userNSPlaceholder: "أدخل معرف المستخدم (مثال: f180949u355983953)",
        includeBot: "🤖 تضمين رسائل البوت",
        dateRange: "📅 نطاق التاريخ",
        startDate: "تاريخ البداية",
        endDate: "تاريخ النهاية",
        resultsPerPage: "📄 النتائج لكل صفحة",
        searchConversations: "🔍 البحث في المحادثات",
        clearSearch: "🗑️ مسح البحث",
        chatMessages: "💬 رسائل الدردشة",
        noMessagesToDisplay: "لا توجد رسائل للعرض. يرجى البحث في المحادثات.",
        liveKeywordSearch: "🔍 البحث المباشر بالكلمات المفتاحية",
        liveKeywordPlaceholder: "اكتب للبحث في الرسائل...",
        noMessagesFound: "لم يتم العثور على رسائل تحتوي على \"{keyword}\"",
        tryDifferentSearch: "حاول مصطلح بحث مختلف أو تحقق من التهجئة",
        previous: "« السابق",
        next: "التالي »",
        showing: "عرض {from}-{to} من {total} رسالة",
        exportResults: "تصدير",
        apiKeyRequired: "مطلوب مفتاح API",
        enterApiKey: "أدخل مفتاح API الخاص بك",
        pasteApiKey: "الصق مفتاح API الخاص بك هنا...",
        apiKeySecurityNote: "مفتاح API الخاص بك محفوظ محلياً ولا يتم إرساله إلى خوادمنا أبداً",
        saveApiKey: "حفظ مفتاح API"
    },
    fr: {
        pageTitle: "💬 Recherche de Conversations de Chat",
        apiKeySet: "Clé API Définie",
        searchFilters: "🔍 Filtres de Recherche",
        userNS: "🆔 Identifiant Utilisateur *",
        userNSPlaceholder: "Entrez l'ID utilisateur (ex: f180949u355983953)",
        includeBot: "🤖 Inclure les Messages Bot",
        dateRange: "📅 Plage de Dates",
        startDate: "Date de Début",
        endDate: "Date de Fin",
        resultsPerPage: "📄 Résultats par Page",
        searchConversations: "🔍 Rechercher des Conversations",
        clearSearch: "🗑️ Effacer la Recherche",
        chatMessages: "💬 Messages de Chat",
        noMessagesToDisplay: "Aucun message à afficher. Veuillez rechercher des conversations.",
        liveKeywordSearch: "🔍 Recherche de Mots-clés en Direct",
        liveKeywordPlaceholder: "Tapez pour rechercher des messages...",
        noMessagesFound: "Aucun message trouvé contenant \"{keyword}\"",
        tryDifferentSearch: "Essayez un terme de recherche différent ou vérifiez l'orthographe",
        previous: "« Précédent",
        next: "Suivant »",
        showing: "Affichage de {from}-{to} sur {total} messages",
        exportResults: "Exporter",
        apiKeyRequired: "Clé API Requise",
        enterApiKey: "Entrez Votre Clé API",
        pasteApiKey: "Collez votre clé API ici...",
        apiKeySecurityNote: "Votre clé API est stockée localement et jamais envoyée à nos serveurs",
        saveApiKey: "Sauvegarder la Clé API"
    },
    es: {
        pageTitle: "💬 Búsqueda de Conversaciones de Chat",
        apiKeySet: "Clave API Establecida",
        searchFilters: "🔍 Filtros de Búsqueda",
        userNS: "🆔 ID de Usuario *",
        userNSPlaceholder: "Ingrese ID de usuario (ej: f180949u355983953)",
        includeBot: "🤖 Incluir Mensajes de Bot",
        dateRange: "📅 Rango de Fechas",
        startDate: "Fecha de Inicio",
        endDate: "Fecha de Fin",
        resultsPerPage: "📄 Resultados por Página",
        searchConversations: "🔍 Buscar Conversaciones",
        clearSearch: "🗑️ Limpiar Búsqueda",
        chatMessages: "💬 Mensajes de Chat",
        noMessagesToDisplay: "No hay mensajes para mostrar. Por favor busque conversaciones.",
        liveKeywordSearch: "🔍 Búsqueda de Palabras Clave en Vivo",
        liveKeywordPlaceholder: "Escriba para buscar mensajes...",
        noMessagesFound: "No se encontraron mensajes que contengan \"{keyword}\"",
        tryDifferentSearch: "Intente un término de búsqueda diferente o verifique la ortografía",
        previous: "« Anterior",
        next: "Siguiente »",
        showing: "Mostrando {from}-{to} de {total} mensajes",
        exportResults: "Exportar",
        apiKeyRequired: "Clave API Requerida",
        enterApiKey: "Ingrese Su Clave API",
        pasteApiKey: "Pegue su clave API aquí...",
        apiKeySecurityNote: "Su clave API se almacena localmente y nunca se envía a nuestros servidores",
        saveApiKey: "Guardar Clave API"
    },
    de: {
        pageTitle: "💬 Chat-Unterhaltungssuche",
        apiKeySet: "API-Schlüssel Gesetzt",
        searchFilters: "🔍 Suchfilter",
        userNS: "🆔 Benutzer-ID *",
        userNSPlaceholder: "Benutzer-ID eingeben (z.B. f180949u355983953)",
        includeBot: "🤖 Bot-Nachrichten Einschließen",
        dateRange: "📅 Datumsbereich",
        startDate: "Startdatum",
        endDate: "Enddatum",
        resultsPerPage: "📄 Ergebnisse pro Seite",
        searchConversations: "🔍 Unterhaltungen Suchen",
        clearSearch: "🗑️ Suche Löschen",
        chatMessages: "💬 Chat-Nachrichten",
        noMessagesToDisplay: "Keine Nachrichten anzuzeigen. Bitte suchen Sie nach Unterhaltungen.",
        liveKeywordSearch: "🔍 Live-Schlüsselwortsuche",
        liveKeywordPlaceholder: "Tippen Sie, um Nachrichten zu suchen...",
        noMessagesFound: "Keine Nachrichten gefunden, die \"{keyword}\" enthalten",
        tryDifferentSearch: "Versuchen Sie einen anderen Suchbegriff oder überprüfen Sie die Rechtschreibung",
        previous: "« Zurück",
        next: "Weiter »",
        showing: "Zeige {from}-{to} von {total} Nachrichten",
        exportResults: "Exportieren",
        apiKeyRequired: "API-Schlüssel Erforderlich",
        enterApiKey: "Geben Sie Ihren API-Schlüssel Ein",
        pasteApiKey: "Fügen Sie Ihren API-Schlüssel hier ein...",
        apiKeySecurityNote: "Ihr API-Schlüssel wird lokal gespeichert und niemals an unsere Server gesendet",
        saveApiKey: "API-Schlüssel Speichern"
    },
    it: {
        pageTitle: "💬 Ricerca Conversazioni Chat",
        apiKeySet: "Chiave API Impostata",
        searchFilters: "🔍 Filtri di Ricerca",
        userNS: "🆔 ID Utente *",
        userNSPlaceholder: "Inserisci ID utente (es: f180949u355983953)",
        includeBot: "🤖 Includi Messaggi Bot",
        dateRange: "📅 Intervallo Date",
        startDate: "Data Inizio",
        endDate: "Data Fine",
        resultsPerPage: "📄 Risultati per Pagina",
        searchConversations: "🔍 Cerca Conversazioni",
        clearSearch: "🗑️ Cancella Ricerca",
        chatMessages: "💬 Messaggi Chat",
        noMessagesToDisplay: "Nessun messaggio da visualizzare. Cerca conversazioni.",
        liveKeywordSearch: "🔍 Ricerca Parole Chiave in Tempo Reale",
        liveKeywordPlaceholder: "Digita per cercare messaggi...",
        noMessagesFound: "Nessun messaggio trovato contenente \"{keyword}\"",
        tryDifferentSearch: "Prova un termine di ricerca diverso o controlla l'ortografia",
        previous: "« Precedente",
        next: "Successivo »",
        showing: "Mostra {from}-{to} di {total} messaggi",
        exportResults: "Esporta",
        apiKeyRequired: "Chiave API Richiesta",
        enterApiKey: "Inserisci la Tua Chiave API",
        pasteApiKey: "Incolla la tua chiave API qui...",
        apiKeySecurityNote: "La tua chiave API è memorizzata localmente e mai inviata ai nostri server",
        saveApiKey: "Salva Chiave API"
    },
    pt: {
        pageTitle: "💬 Busca de Conversas de Chat",
        apiKeySet: "Chave API Definida",
        searchFilters: "🔍 Filtros de Busca",
        userNS: "🆔 ID do Usuário *",
        userNSPlaceholder: "Digite ID do usuário (ex: f180949u355983953)",
        includeBot: "🤖 Incluir Mensagens de Bot",
        dateRange: "📅 Intervalo de Datas",
        startDate: "Data de Início",
        endDate: "Data de Fim",
        resultsPerPage: "📄 Resultados por Página",
        searchConversations: "🔍 Buscar Conversas",
        clearSearch: "🗑️ Limpar Busca",
        chatMessages: "💬 Mensagens de Chat",
        noMessagesToDisplay: "Nenhuma mensagem para exibir. Busque conversas.",
        liveKeywordSearch: "🔍 Busca de Palavras-chave ao Vivo",
        liveKeywordPlaceholder: "Digite para buscar mensagens...",
        noMessagesFound: "Nenhuma mensagem encontrada contendo \"{keyword}\"",
        tryDifferentSearch: "Tente um termo de busca diferente ou verifique a ortografia",
        previous: "« Anterior",
        next: "Próximo »",
        showing: "Mostrando {from}-{to} de {total} mensagens",
        exportResults: "Exportar",
        apiKeyRequired: "Chave API Necessária",
        enterApiKey: "Digite Sua Chave API",
        pasteApiKey: "Cole sua chave API aqui...",
        apiKeySecurityNote: "Sua chave API é armazenada localmente e nunca enviada aos nossos servidores",
        saveApiKey: "Salvar Chave API"
    },
    ru: {
        pageTitle: "💬 Поиск Чатов",
        apiKeySet: "API Ключ Установлен",
        searchFilters: "🔍 Фильтры Поиска",
        userNS: "🆔 ID Пользователя *",
        userNSPlaceholder: "Введите ID пользователя (например: f180949u355983953)",
        includeBot: "🤖 Включить Сообщения Бота",
        dateRange: "📅 Диапазон Дат",
        startDate: "Дата Начала",
        endDate: "Дата Окончания",
        resultsPerPage: "📄 Результатов на Страницу",
        searchConversations: "🔍 Поиск Разговоров",
        clearSearch: "🗑️ Очистить Поиск",
        chatMessages: "💬 Сообщения Чата",
        noMessagesToDisplay: "Нет сообщений для отображения. Найдите разговоры.",
        liveKeywordSearch: "🔍 Поиск по Ключевым Словам в Реальном Времени",
        liveKeywordPlaceholder: "Введите для поиска сообщений...",
        noMessagesFound: "Сообщения, содержащие \"{keyword}\", не найдены",
        tryDifferentSearch: "Попробуйте другой поисковый запрос или проверьте правописание",
        previous: "« Назад",
        next: "Далее »",
        showing: "Показано {from}-{to} из {total} сообщений",
        exportResults: "Экспорт",
        apiKeyRequired: "Требуется API Ключ",
        enterApiKey: "Введите Ваш API Ключ",
        pasteApiKey: "Вставьте ваш API ключ здесь...",
        apiKeySecurityNote: "Ваш API ключ хранится локально и никогда не отправляется на наши серверы",
        saveApiKey: "Сохранить API Ключ"
    },
    zh: {
        pageTitle: "💬 聊天对话搜索",
        apiKeySet: "API密钥已设置",
        searchFilters: "🔍 搜索过滤器",
        userNS: "🆔 用户ID *",
        userNSPlaceholder: "输入用户ID (例如: f180949u355983953)",
        includeBot: "🤖 包含机器人消息",
        dateRange: "📅 日期范围",
        startDate: "开始日期",
        endDate: "结束日期",
        resultsPerPage: "📄 每页结果数",
        searchConversations: "🔍 搜索对话",
        clearSearch: "🗑️ 清除搜索",
        chatMessages: "💬 聊天消息",
        noMessagesToDisplay: "没有要显示的消息。请搜索对话。",
        liveKeywordSearch: "🔍 实时关键词搜索",
        liveKeywordPlaceholder: "输入以搜索消息...",
        noMessagesFound: "未找到包含\"{keyword}\"的消息",
        tryDifferentSearch: "尝试不同的搜索词或检查拼写",
        previous: "« 上一页",
        next: "下一页 »",
        showing: "显示第{from}-{to}条，共{total}条消息",
        exportResults: "导出",
        apiKeyRequired: "需要API密钥",
        enterApiKey: "输入您的API密钥",
        pasteApiKey: "在此处粘贴您的API密钥...",
        apiKeySecurityNote: "您的API密钥存储在本地，永远不会发送到我们的服务器",
        saveApiKey: "保存API密钥"
    },
    ja: {
        pageTitle: "💬 チャット会話検索",
        apiKeySet: "APIキー設定済み",
        searchFilters: "🔍 検索フィルター",
        userNS: "🆔 ユーザーID *",
        userNSPlaceholder: "ユーザーIDを入力 (例: f180949u355983953)",
        includeBot: "🤖 ボットメッセージを含める",
        dateRange: "📅 日付範囲",
        startDate: "開始日",
        endDate: "終了日",
        resultsPerPage: "📄 ページあたりの結果数",
        searchConversations: "🔍 会話を検索",
        clearSearch: "🗑️ 検索をクリア",
        chatMessages: "💬 チャットメッセージ",
        noMessagesToDisplay: "表示するメッセージがありません。会話を検索してください。",
        liveKeywordSearch: "🔍 ライブキーワード検索",
        liveKeywordPlaceholder: "メッセージを検索するために入力...",
        noMessagesFound: "\"{keyword}\"を含むメッセージが見つかりません",
        tryDifferentSearch: "異なる検索語を試すか、スペルを確認してください",
        previous: "« 前へ",
        next: "次へ »",
        showing: "{total}件中{from}-{to}件を表示",
        exportResults: "エクスポート",
        apiKeyRequired: "APIキーが必要",
        enterApiKey: "APIキーを入力",
        pasteApiKey: "ここにAPIキーを貼り付けてください...",
        apiKeySecurityNote: "APIキーはローカルに保存され、サーバーに送信されることはありません",
        saveApiKey: "APIキーを保存"
    },
    ko: {
        pageTitle: "💬 채팅 대화 검색",
        apiKeySet: "API 키 설정됨",
        searchFilters: "🔍 검색 필터",
        userNS: "🆔 사용자 ID *",
        userNSPlaceholder: "사용자 ID 입력 (예: f180949u355983953)",
        includeBot: "🤖 봇 메시지 포함",
        dateRange: "📅 날짜 범위",
        startDate: "시작 날짜",
        endDate: "종료 날짜",
        resultsPerPage: "📄 페이지당 결과 수",
        searchConversations: "🔍 대화 검색",
        clearSearch: "🗑️ 검색 지우기",
        chatMessages: "💬 채팅 메시지",
        noMessagesToDisplay: "표시할 메시지가 없습니다. 대화를 검색하세요.",
        liveKeywordSearch: "🔍 실시간 키워드 검색",
        liveKeywordPlaceholder: "메시지를 검색하려면 입력...",
        noMessagesFound: "\"{keyword}\"을 포함하는 메시지를 찾을 수 없습니다",
        tryDifferentSearch: "다른 검색어를 시도하거나 철자를 확인하세요",
        previous: "« 이전",
        next: "다음 »",
        showing: "{total}개 중 {from}-{to}개 표시",
        exportResults: "내보내기",
        apiKeyRequired: "API 키 필요",
        enterApiKey: "API 키 입력",
        pasteApiKey: "여기에 API 키를 붙여넣으세요...",
        apiKeySecurityNote: "API 키는 로컬에 저장되며 서버로 전송되지 않습니다",
        saveApiKey: "API 키 저장"
    }
};

// ===========================================
// DOM Elements & Initialization
// ===========================================
class ChatSearchApp {

    init() {
        this.initializeApiKey();
        this.setupApiKeyInput();
        this.setupEventListeners();
        this.initializeChatContainer();
        this.setupFormValidation();
        this.setupDefaultDates();
        this.initializeTranslation();
    }
    
    initializeApiKey() {
        // Get API key from global variable or localStorage
        this.apiKey = window.currentApiKey || localStorage.getItem('alexa360_api_key');
        this.demoMode = window.demoMode;
        
        if (!this.apiKey && !this.demoMode) {
            console.error('No API key available');
            this.showError('No API key found. Please refresh the page and enter your API key.');
            return false;
        }
        
        if (this.demoMode) {
            console.log('Running in demo mode with limited functionality');
            this.showError('Demo Mode: Limited functionality. Please enter your API key for full access.');
        }
        
        return true;
    }
    
    setupApiKeyInput() {
        // Show API key input if no API key is available
        if (!this.apiKey && !this.demoMode) {
            const apiKeySection = document.getElementById('apiKeySection');
            if (apiKeySection) {
                apiKeySection.style.display = 'block';
            }
        }
        
        // Setup API key input functionality
        const apiKeyInput = document.getElementById('apiKeyInput');
        const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
        const toggleVisibilityBtn = document.getElementById('toggleApiKeyVisibility');
        
        if (apiKeyInput && saveApiKeyBtn) {
            // Save API key button
            saveApiBtn.addEventListener('click', () => this.saveApiKey());
            
            // Enter key to save
            apiKeyInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.saveApiKey();
                }
            });
        }
        
        if (toggleVisibilityBtn && apiKeyInput) {
            // Toggle visibility
            toggleVisibilityBtn.addEventListener('click', () => {
                const icon = toggleVisibilityBtn.querySelector('i');
                if (apiKeyInput.type === 'password') {
                    apiKeyInput.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    apiKeyInput.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    saveApiKey() {
        const apiKeyInput = document.getElementById('apiKeyInput');
        const apiKey = apiKeyInput?.value.trim();
        
        if (!apiKey) {
            this.showError('Please enter your API key.');
            return;
        }
        
        // Basic validation
        if (apiKey.length < 20) {
            this.showError('Please enter a valid API key (minimum 20 characters).');
            return;
        }
        
        // Save to localStorage
        localStorage.setItem('alexa360_api_key', apiKey);
        
        // Update global variables
        this.apiKey = apiKey;
        window.currentApiKey = apiKey;
        
        // Hide API key section
        const apiKeySection = document.getElementById('apiKeySection');
        if (apiKeySection) {
            apiKeySection.style.display = 'none';
        }
        
        // Update API key status
        this.updateApiKeyStatus();
        
        // Show success message
        this.showSuccessMessage('API key saved successfully!');
        
        // Clear the input
        if (apiKeyInput) {
            apiKeyInput.value = '';
        }
    }
    
    updateApiKeyStatus() {
        const apiKeyStatus = document.getElementById('apiKeyStatus');
        const removeApiKeyBtn = document.getElementById('removeApiKeyBtn');
        
        if (apiKeyStatus) {
            apiKeyStatus.textContent = 'API Key Set';
            apiKeyStatus.parentElement.parentElement.classList.add('text-success');
        }
        
        if (removeApiKeyBtn) {
            removeApiKeyBtn.style.display = 'block';
        }
    }
    
    getMockData() {
        // Return mock data for demo mode
        return {
            data: [
                {
                    id: "demo_1",
                    user_ns: "demo_user",
                    bot_ns: "demo_bot",
                    message: "This is a demo message for testing purposes.",
                    timestamp: new Date().toISOString(),
                    is_bot: false
                },
                {
                    id: "demo_2", 
                    user_ns: "demo_user",
                    bot_ns: "demo_bot",
                    message: "This is a bot response in demo mode.",
                    timestamp: new Date().toISOString(),
                    is_bot: true
                }
            ],
            pagination: {
                total: 2,
                page: 1,
                limit: 20
            }
        };
    }
    
    setupEventListeners() {
        // Search form submission
        const searchForm = document.getElementById('searchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.searchConversations();
            });
        }
        
        // Clear search button
        const clearBtn = document.getElementById('clearBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearSearch());
        }
        
        // Live keyword search
        const keywordInput = document.getElementById('keywordInput');
        if (keywordInput) {
            let searchTimeout;
            keywordInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    this.performLiveSearch(e.target.value);
                }, 300);
            });
        }
        
        // Language selection
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
    }
    
    initializeChatContainer() {
        this.chatContainer = document.getElementById('chatContainer');
        this.paginationSection = document.getElementById('paginationSection');
        this.pagination = document.getElementById('pagination');
    }
    
    setupFormValidation() {
        const userNSInput = document.getElementById('userNS');
        if (userNSInput) {
            userNSInput.addEventListener('input', () => {
                this.validateForm();
            });
        }
    }
    
    setupDefaultDates() {
        const startDateInput = document.getElementById('startDate');
        const endDateInput = document.getElementById('endDate');
        
        if (startDateInput && endDateInput) {
            const today = new Date();
            const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
            
            startDateInput.value = oneMonthAgo.toISOString().split('T')[0];
            endDateInput.value = today.toISOString().split('T')[0];
        }
    }
    
    initializeTranslation() {
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        this.changeLanguage(savedLanguage);
    }
    
    changeLanguage(languageCode) {
        localStorage.setItem('selectedLanguage', languageCode);
        
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = languageCode;
        }
        
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = translations[languageCode]?.[key] || translations['en'][key] || key;
            element.textContent = translation;
        });
        
        // Handle placeholder translations
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = translations[languageCode]?.[key] || translations['en'][key] || key;
            element.placeholder = translation;
        });
    }
    
    validateForm() {
        const userNS = document.getElementById('userNS').value.trim();
        const searchBtn = document.querySelector('.btn-search');
        
        if (searchBtn) {
            searchBtn.disabled = !userNS;
        }
        
        return !!userNS;
    }
    
    async searchConversations() {
        if (!this.validateForm()) {
            this.showError('Please provide User NS to search.');
            return;
        }
        
        if (this.isSearching) {
            console.log('⚠️ Search already in progress, ignoring new request');
            this.showError('Search is already in progress. Please wait or click "Stop Search" to cancel.');
            return;
        }
        
        const searchBtn = document.querySelector('.btn-search');
        this.showButtonLoading(searchBtn);
        
        try {
            this.isSearching = true;
            
            const formData = new FormData(document.getElementById('searchForm'));
            const searchParams = {
                user_ns: formData.get('userNS'),
                include_bot: formData.get('includeBot') ? '1' : '0',
                start_time: formData.get('startDate') || '',
                end_time: formData.get('endDate') || '',
                limit: formData.get('limit') || '20'
            };
            
            let data;
            if (this.demoMode) {
                data = this.getMockData();
            } else {
                data = await this.fetchConversations(searchParams);
            }
            
            this.displayResults(data);
            this.hideButtonLoading(searchBtn);
            
        } catch (error) {
            console.error('Search error:', error);
            this.hideButtonLoading(searchBtn);
            
            if (error.name === 'AbortError') {
                this.showError('Search was cancelled.');
            } else if (error.message.includes('timeout') || error.message.includes('Request timeout') || error.message.includes('AbortError')) {
                this.showError('Search timed out after 30 seconds. Please check the User NS and try again. If the problem persists, the User NS may not exist.');
            } else {
                this.showError(`Search failed: ${error.message}`);
            }
        } finally {
            this.isSearching = false;
            this.currentAbortController = null;
            this.hideButtonLoading(searchBtn);
        }
    }
    
    async fetchConversations(params) {
        const baseUrl = 'https://api.alexa360.ai/v1/conversations';
        const queryString = new URLSearchParams(params).toString();
        const url = `${baseUrl}?${queryString}`;
        
        console.log('🔍 Fetching conversations:', url);
        
        this.currentAbortController = new AbortController();
        const timeoutId = setTimeout(() => this.currentAbortController.abort(), 30000);
        
        try {
            const response = await fetch('/api/proxy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({ url: url }),
                signal: this.currentAbortController.signal
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            console.log('✅ Conversations fetched successfully:', data);
            return data;
            
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }
    
    displayResults(data) {
        if (!this.chatContainer) return;
        
        if (!data.data || data.data.length === 0) {
            this.chatContainer.innerHTML = `
                <div class="text-center text-muted py-5">
                    <i class="fas fa-search fa-3x mb-3"></i>
                    <p data-translate="noMessagesToDisplay">No messages to display. Please search for conversations.</p>
                </div>
            `;
            this.paginationSection.style.display = 'none';
            return;
        }
        
        let html = '';
        data.data.forEach((message, index) => {
            const messageClass = message.is_bot ? 'bot-message' : 'user-message';
            const icon = message.is_bot ? '🤖' : '👤';
            const timestamp = new Date(message.timestamp).toLocaleString();
            
            html += `
                <div class="message-item ${messageClass}" data-index="${index}">
                    <div class="message-header">
                        <span class="message-icon">${icon}</span>
                        <span class="message-sender">${message.is_bot ? 'Bot' : 'User'}</span>
                        <span class="message-time">${timestamp}</span>
                    </div>
                    <div class="message-content">${this.escapeHtml(message.message)}</div>
                </div>
            `;
        });
        
        this.chatContainer.innerHTML = html;
        this.setupPagination(data.pagination);
        this.paginationSection.style.display = 'block';
    }
    
    setupPagination(pagination) {
        if (!this.pagination || !pagination) return;
        
        const { total, page, limit } = pagination;
        const totalPages = Math.ceil(total / limit);
        
        if (totalPages <= 1) {
            this.paginationSection.style.display = 'none';
            return;
        }
        
        let html = '';
        
        // Previous button
        if (page > 1) {
            html += `<li class="page-item"><a class="page-link" href="#" data-page="${page - 1}">« Previous</a></li>`;
        }
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const activeClass = i === page ? 'active' : '';
            html += `<li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
        }
        
        // Next button
        if (page < totalPages) {
            html += `<li class="page-item"><a class="page-link" href="#" data-page="${page + 1}">Next »</a></li>`;
        }
        
        this.pagination.innerHTML = html;
        
        // Add click handlers
        this.pagination.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('page-link')) {
                const pageNum = parseInt(e.target.dataset.page);
                this.goToPage(pageNum);
            }
        });
    }
    
    async goToPage(page) {
        // Implementation for pagination
        console.log('Going to page:', page);
    }
    
    performLiveSearch(keyword) {
        if (!keyword.trim()) {
            this.clearLiveSearch();
            return;
        }
        
        const messages = document.querySelectorAll('.message-item');
        let visibleCount = 0;
        
        messages.forEach(message => {
            const content = message.querySelector('.message-content').textContent.toLowerCase();
            const matches = content.includes(keyword.toLowerCase());
            
            message.style.display = matches ? 'block' : 'none';
            if (matches) visibleCount++;
        });
        
        // Show search results info
        this.showSearchResultsInfo(keyword, visibleCount);
    }
    
    showSearchResultsInfo(keyword, count) {
        let infoElement = document.getElementById('searchResultsInfo');
        if (!infoElement) {
            infoElement = document.createElement('div');
            infoElement.id = 'searchResultsInfo';
            infoElement.className = 'alert alert-info mt-3';
            this.chatContainer.parentNode.insertBefore(infoElement, this.chatContainer);
        }
        
        if (count === 0) {
            infoElement.innerHTML = `
                <i class="fas fa-search me-2"></i>
                <span data-translate="noMessagesFound">No messages found containing "${keyword}"</span>
                <br><small data-translate="tryDifferentSearch">Try a different search term or check your spelling</small>
            `;
        } else {
            infoElement.innerHTML = `
                <i class="fas fa-search me-2"></i>
                Found ${count} message${count !== 1 ? 's' : ''} containing "${keyword}"
            `;
        }
    }
    
    clearLiveSearch() {
        const messages = document.querySelectorAll('.message-item');
        messages.forEach(message => {
            message.style.display = 'block';
        });
        
        const infoElement = document.getElementById('searchResultsInfo');
        if (infoElement) {
            infoElement.remove();
        }
    }
    
    clearSearch() {
        // Clear form
        document.getElementById('searchForm').reset();
        this.setupDefaultDates();
        
        // Clear results
        if (this.chatContainer) {
            this.chatContainer.innerHTML = `
                <div class="text-center text-muted py-5">
                    <i class="fas fa-comments fa-3x mb-3"></i>
                    <p data-translate="noMessagesToDisplay">No messages to display. Please search for conversations.</p>
                </div>
            `;
        }
        
        // Hide pagination
        if (this.paginationSection) {
            this.paginationSection.style.display = 'none';
        }
        
        // Clear live search
        this.clearLiveSearch();
        
        // Clear error messages
        this.hideError();
    }
    
    showButtonLoading(button) {
        if (!button) return;
        
        if (!button.dataset.originalContent) {
            button.dataset.originalContent = button.innerHTML;
        }
        button.innerHTML = '<span class="me-2" aria-hidden="true">⏹️</span><span>Stop Search</span>';
        button.classList.remove('btn-loading');
        button.classList.add('btn-danger');
        button.disabled = false;
        button.onclick = () => this.stopSearch();
    }
    
    hideButtonLoading(button) {
        if (!button) return;
        
        button.classList.remove('btn-loading', 'btn-danger');
        button.disabled = false;
        if (button.dataset.originalContent) {
            button.innerHTML = button.dataset.originalContent;
            button.onclick = null;
        }
    }
    
    stopSearch() {
        console.log('🛑 User requested to stop search');
        if (this.currentAbortController) {
            this.currentAbortController.abort();
            this.currentAbortController = null;
        }
        this.isSearching = false;
        const searchBtn = document.querySelector('.btn-search');
        this.hideButtonLoading(searchBtn);
        this.showError('Search stopped by user. Please check the User NS and try again.');
        if (this.chatContainer) {
            this.chatContainer.innerHTML = `
                <div class="text-center text-muted py-5">
                    <i class="fas fa-stop-circle fa-3x mb-3 text-warning"></i>
                    <p>Search was stopped</p>
                    <small>Please verify the User NS is correct and try again</small>
                </div>
            `;
        }
    }
    
    showError(message) {
        const errorSection = document.getElementById('errorSection');
        if (errorSection) {
            const errorText = errorSection.querySelector('span[data-translate="provideUserNS"]');
            if (errorText) {
                errorText.textContent = message;
            }
            errorSection.style.display = 'block';
        }
    }
    
    hideError() {
        const errorSection = document.getElementById('errorSection');
        if (errorSection) {
            errorSection.style.display = 'none';
        }
    }
    
    showSuccessMessage(message) {
        // Create a temporary success message
        const successDiv = document.createElement('div');
        successDiv.className = 'alert alert-success alert-dismissible fade show position-fixed';
        successDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle me-2"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(successDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (successDiv.parentNode) {
                successDiv.remove();
            }
        }, 5000);
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    exportResults(format) {
        const messages = document.querySelectorAll('.message-item');
        if (messages.length === 0) {
            alert('No data to export');
            return;
        }
        
        let data = [];
        messages.forEach(message => {
            const sender = message.querySelector('.message-sender').textContent;
            const content = message.querySelector('.message-content').textContent;
            const time = message.querySelector('.message-time').textContent;
            
            data.push({
                sender: sender,
                content: content,
                timestamp: time
            });
        });
        
        let content = '';
        let filename = '';
        let mimeType = '';
        
        switch (format) {
            case 'json':
                content = JSON.stringify(data, null, 2);
                filename = 'chat-messages.json';
                mimeType = 'application/json';
                break;
            case 'csv':
                content = 'Sender,Content,Timestamp\n';
                content += data.map(item => 
                    `"${item.sender}","${item.content.replace(/"/g, '""')}","${item.timestamp}"`
                ).join('\n');
                filename = 'chat-messages.csv';
                mimeType = 'text/csv';
                break;
            case 'txt':
                content = data.map(item => 
                    `[${item.timestamp}] ${item.sender}: ${item.content}`
                ).join('\n\n');
                filename = 'chat-messages.txt';
                mimeType = 'text/plain';
                break;
        }
        
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// ===========================================
// Initialize Application
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    window.chatSearchApp = new ChatSearchApp();
    window.chatSearchApp.init();
});
