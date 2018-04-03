//topbar leftbar
{
    $(window).scroll(function () {
        let st = $(window).scrollTop();
        if (st > 750) {
            $(".topbar").show();
        } else {
            $(".topbar").hide();
        }
        if (st > 600) {
            $(".leftbar").show();
        } else {
            $(".leftbar").hide();
        }
    });
}
//顶部导航
{
    $(".top-con-tan")
        .mouseenter(function () {
            let index = $(this).index(".top-con-tan");
            $(".pop-con").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".top-con-tan");
            $(".pop-con").eq(index).hide();
        })
}
//banner轮播
{
    $(".page1").mouseenter(function () {
        let index = $(this).index(".page1");
        $(".page1").removeClass("active").eq(index).addClass("active");
        $(".imgbox1").removeClass("active").eq(index).addClass("active");
        n = index;
    });
    let n = 0;
    let l = $(".imgbox1").length;

    let st=setInterval(move, 3000);

    function move() {
        n++;
        if (n === l) {
            n = 0;
        }
        if (n < 0) {
            n = l - 1;
        }
        $(".page1").removeClass("active").eq(n).addClass("active");
        $(".imgbox1").removeClass("active").eq(n).addClass("active");
        switch (n){
            case "1":$(".banner").removeClass("")
        }
    }

    $(".banner").mouseenter(function () {
        clearInterval(st)
    });
    $(".banner").mouseleave(function () {
        st=setInterval(move,3000);
    })
}
//leftbar
{
    $(".left-item9").click(function () {
        let index=$(this).index(".left-item9");
        let ot= $(".per-item").eq(index).offset().top-100;
        $("html,body").animate({scrollTop:ot},200)
    });
    $(window).scroll(function () {
        let st=$(window).scrollTop();
        $(".per-item").each(function (index,ele) {
            if(st>$(this).offset().top-200){
                $(".left-item9").removeClass("active1").eq(index).addClass("active1")
            }
        })
    });
    // $(".twotit div").mouseenter(function () {
    //     $(".twotit div").removeClass("active1").filter(this).addClass("active1");
    //     let index=$(this).index();
    //     // alert(index);
    //     $(".twocon").removeClass("active1").eq(index-1).addClass("active1");
    // })
}
//左侧导航
{
    $(".left-nav0")
        .mouseenter(function () {
            let index = $(this).index(".left-nav0");
            $(".label").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".left-nav0");
            $(".label").eq(index).hide();
        })
}
//返回top
{
    $(".left-item2").click(function () {
        $("html,body").animate({scrollTop: 0})
    });
    $(".nav1-tan").click(function () {
        $("html,body").animate({scrollTop: 0})
    });
    $(".right-nav11").click(function () {
        $("html,body").animate({scrollTop: 0})
    })
}
//右侧导航
{
    $(".right-nav10").mouseenter(function () {
        let index = $(this).index(".right-nav10");
        $(".nav1-tan").eq(index)
            .fadeIn()
            .css("display", "block")
    });
    $(".right-nav10").mouseleave(function () {
        let index = $(this).index(".right-nav10");
        $(".nav1-tan").eq(index)
            .fadeOut()
            .css("display", "none")
    });
    $(".right-nav8").mouseenter(function () {
        $(".erweima1").css("display","block")
    });
    $(".right-nav8").mouseleave(function () {
        $(".erweima1").css("display","none");
    })
}
//今日特惠
{
    let title=document.querySelectorAll(".mid-1");
    let content=document.querySelectorAll(".mid-b1");
    let box=document.querySelector(".super-mid")
    let n = 0;
    let obj=content[n];
    let t = setInterval(time,2000);
    function time() {
        n++;
        if (n === title.length) {
            n = 0;
        }
        if (n<0){
            n=title.length-1;
        }
        for (let i = 0; i < title.length; i++) {
            title[i].classList.remove("mid-2");
            content[i].classList.remove("mid-b2");
        }
        content[n].classList.add("mid-b2");
        title[n].classList.add("mid-2");
    }
    box.onmouseenter=function () {
        clearInterval(t);
    };
    box.onmouseleave=function () {
        t=setInterval(time,2000);
    };
    // title.forEach(function (ele,index){
    //     ele.onmouseenter=function(){
    //         obj.style.display="none";
    //         content[index].style.display="block";
    //         obj=content[index];
    //         for (let j = 0; j < content.length; j++) {
    //             title[j].classList.remove("mid-2");
    //         }
    //             title[j].classList.add("mid-2");
    //     };
    //     // ele.onmouseleave=function(){
    //     //     content[index].style.display="none";
    //     // }
    // })

}