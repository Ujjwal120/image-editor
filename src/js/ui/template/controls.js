export default ({ locale, biImage, loadButtonStyle, downloadButtonStyle }) => `
    <div class="tui-image-editor-controls">
        <div class="tui-image-editor-controls-logo">
            <img src="${biImage}" />
        </div>
        <ul class="tui-image-editor-menu"></ul>

        <div class="tui-image-editor-controls-buttons">
            <div style="${loadButtonStyle}">
                ${locale.localize('Load')}
                <input type="file" class="tui-image-editor-load-btn" />
            </div>
        </div>
    </div>
`;
