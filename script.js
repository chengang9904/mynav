document.addEventListener('DOMContentLoaded', () => {
    // 初始化状态
    let currentMode = CONFIG.defaultMode || 'lan';
    
    // DOM 元素
    const titleEl = document.getElementById('page-title');
    const containerEl = document.getElementById('categories-container');
    const toggleCheckbox = document.getElementById('mode-toggle');
    const labelLan = document.getElementById('label-lan');
    const labelWan = document.getElementById('label-wan');

    // 设置页面标题
    document.title = CONFIG.title;
    titleEl.textContent = CONFIG.title;

    // 初始化开关状态
    toggleCheckbox.checked = currentMode === 'wan';
    updateSwitchLabels();

    // 渲染初始内容
    renderCategories();

    // 监听切换事件
    toggleCheckbox.addEventListener('change', (e) => {
        currentMode = e.target.checked ? 'wan' : 'lan';
        updateSwitchLabels();
        updateLinks();
    });

    function updateSwitchLabels() {
        if (currentMode === 'lan') {
            labelLan.classList.add('active');
            labelWan.classList.remove('active');
        } else {
            labelLan.classList.remove('active');
            labelWan.classList.add('active');
        }
    }

    function renderCategories() {
        containerEl.innerHTML = '';

        CONFIG.categories.forEach(category => {
            const section = document.createElement('div');
            section.className = 'category-section';

            const title = document.createElement('h2');
            title.className = 'category-title';
            title.textContent = category.name;
            section.appendChild(title);

            const grid = document.createElement('div');
            grid.className = 'grid';

            category.items.forEach(item => {
                const card = createCard(item);
                grid.appendChild(card);
            });

            section.appendChild(grid);
            containerEl.appendChild(section);
        });
    }

    function createCard(item) {
        const a = document.createElement('a');
        a.className = 'card';
        // 存储数据以便切换时使用
        a.dataset.lan = item.lan || '';
        a.dataset.wan = item.wan || '';
        
        // 设置初始链接
        const targetUrl = currentMode === 'lan' ? item.lan : item.wan;
        updateCardState(a, targetUrl);

        a.target = '_blank'; // 新标签页打开

        const iconDiv = document.createElement('div');
        iconDiv.className = 'card-icon';
        iconDiv.innerHTML = `<i class="${item.icon}"></i>`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-content';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'card-title';
        titleDiv.textContent = item.name;

        const descDiv = document.createElement('div');
        descDiv.className = 'card-desc';
        descDiv.textContent = item.desc || '';

        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(descDiv);

        a.appendChild(iconDiv);
        a.appendChild(contentDiv);

        return a;
    }

    function updateLinks() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const targetUrl = currentMode === 'lan' ? card.dataset.lan : card.dataset.wan;
            updateCardState(card, targetUrl);
        });
    }

    function updateCardState(cardElement, url) {
        if (url) {
            cardElement.href = url;
            cardElement.classList.remove('disabled');
            // 恢复点击事件
            cardElement.style.pointerEvents = 'auto';
        } else {
            cardElement.removeAttribute('href');
            cardElement.classList.add('disabled');
            // 禁用点击事件
            cardElement.style.pointerEvents = 'none';
        }
    }

    // 随机端口生成器功能
    const portValueEl = document.getElementById('port-value');
    const generatePortBtn = document.getElementById('generate-port');
    const copyPortBtn = document.getElementById('copy-port');

    // 生成随机端口（10000-65535）
    function generateRandomPort() {
        const min = 10000;
        const max = 65535;
        const randomPort = Math.floor(Math.random() * (max - min + 1)) + min;
        portValueEl.textContent = randomPort;
    }

    // 复制端口到剪贴板
    async function copyPortToClipboard() {
        const port = portValueEl.textContent;
        try {
            await navigator.clipboard.writeText(port);
            // 显示复制成功反馈
            copyPortBtn.classList.add('copied');
            setTimeout(() => {
                copyPortBtn.classList.remove('copied');
            }, 1500);
        } catch (err) {
            console.error('复制失败:', err);
        }
    }

    // 绑定事件
    generatePortBtn.addEventListener('click', generateRandomPort);
    copyPortBtn.addEventListener('click', copyPortToClipboard);

    // 初始化时生成一个随机端口
    generateRandomPort();

    // 随机字符串生成器功能
    const stringValueEl = document.getElementById('string-value');
    const generateStringBtn = document.getElementById('generate-string');
    const copyStringBtn = document.getElementById('copy-string');

    // 生成随机字符串（默认8位，字母数字混合）
    function generateRandomString(length = 8) {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        stringValueEl.textContent = result;
    }

    // 复制字符串到剪贴板
    async function copyStringToClipboard() {
        const str = stringValueEl.textContent;
        try {
            await navigator.clipboard.writeText(str);
            // 显示复制成功反馈
            copyStringBtn.classList.add('copied');
            setTimeout(() => {
                copyStringBtn.classList.remove('copied');
            }, 1500);
        } catch (err) {
            console.error('复制失败:', err);
        }
    }

    // 绑定事件
    generateStringBtn.addEventListener('click', () => generateRandomString());
    copyStringBtn.addEventListener('click', copyStringToClipboard);

    // 初始化时生成一个随机字符串
    generateRandomString();
});
