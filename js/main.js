// Функция, которая проверяет загрузку HTML-документа и DOM-дерева
document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая проверяет загрузку всего контента страницы
    window.addEventListener("load", function() {

        //Переменная-ссылка на элемент с классом .progressBar
        const progressBar = this.document.querySelector(".progressBar");
        
        //При прокрутке окна страницы будет выполняться функция
        this.window.addEventListener("scroll", progressScroll);

        function progressScroll(event) {
            //Высоту прокрученной страницы
            let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
            //Высота всей страницы
            let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            //Вычисляем процент прокрученной части страницы
            let scrollPercent = (windowScroll / windowHeight) * 100;

            //Меняем значение width у .progressBar
            progressBar.style.width = scrollPercent + "%";
            
            if (progressBar.style.width == "100%") {
                progressBar.style.borderRadius = 0 + "px";
            } else {
                progressBar.style.borderBottomRightRadius = 10 + "px";
                progressBar.style.borderTopRightRadius = 10 + "px";
            }
        };
        
     });
});