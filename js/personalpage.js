$(document).ready(function () {
    $(".subcontent-noti ").hide();
    $(".main-menu .fa-heart").click(function(){
        $(".subcontent-noti ").toggle();

    });

    $(".icons-content .fa-heart").click(function () {
        var $this = $(this);
        if ($this.hasClass('fa-solid')) {
            $this.removeClass('fa-solid').addClass('fa-regular');
            $this.css('color', 'black');
        } else {
            $this.removeClass('fa-regular').addClass('fa-solid');
            $this.css('color', 'red');
            $this.addClass('beat');
        }

    });

    $(".icons-content .fa-bookmark").click(function () {
        var $this = $(this);
        if ($this.hasClass('fa-solid')) {
            $this.removeClass('fa-solid').addClass('fa-regular');
            $this.css('color', 'black');
        } else {
            $this.removeClass('fa-regular').addClass('fa-solid');
            $this.css('color', 'yellow');
            $this.css('backdrop-filter', 'blur(20px)');
            $this.css('background-color', 'rgba(255, 255, 255, 0.1)')
            $this.addClass('beat');
        }

    });
    // Xử lý sự kiện click cho phần tử 'create'
    $("#create").click(function(event) {
        event.preventDefault();
        $(".subcontent-create").toggle();
    });
    // Xử lý sự kiện click cho phần tử 'exit'
    $("#exit").click(function(event) {
        event.preventDefault();
        $(".subcontent-create").hide();
    });

    $(".popup2").hide();
    //chỉ focus những hình ảnh trong bài viết và tin lướt thôi
    $(".photos img,.body-content>img").click(function (event) {
        event.preventDefault();
        let im = $(this).attr("src");
        $(".popup2 .img").attr("src", im);
        $(".popup2").show();
    });

    $(".close").click(function () {
        event.preventDefault();
        $(".popup").hide();
        $(".popup2").hide();
    })

});