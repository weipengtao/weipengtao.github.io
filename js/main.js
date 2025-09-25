// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    console.log('网站已加载完成！');
    
    // 添加一些简单的交互效果
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // 显示当前年份在页脚版权信息中
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
    }
});