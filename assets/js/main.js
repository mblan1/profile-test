const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// test
const loadingLogos = $$(".logos");
setInterval(() => {
    loadingLogos[0].style.display = "inline-block"
    loadingLogos[0].style.animation = "logo linear 2s infinite"
})
setInterval(() => {
    loadingLogos[1].style.display = "inline-block"
    loadingLogos[1].style.animation = "logo linear 2s infinite"
}, 500)
setInterval(() => {
    loadingLogos[2].style.display = "inline-block"
    loadingLogos[2].style.animation = "logo linear 2s infinite"
}, 1000)
// =======

const navIcons = $$('.nav-icons');
const navBars = $$('.nav-name');
const contents = $$('.content');
const getBody = $('.body')
const getNav = $('.nav')
const getFixedNav = $('.nav-fixed')
const getCt1 = $('.ct1')
const getCt2 = $('.ct2')
const getCt3 = $('.ct3')
const getCt4 = $('.ct4')

// member Info
const memberList = $$(".member-item");
const socialName = $(".social-name");
const avturl = $(".social-avt-img");
const linkFace = $(".link-face");
const linkInsta = $(".link-insta");
const linkTopTop = $(".link-tiktok");
const email = $(".mail")
const born = $(".born")
const phone = $(".phone")
const hometown = $(".hometown")
const f8 = $(".edu.f8")
const p1 = $(".p1")
const p2 = $(".p2")
const slideShow = $(".slideshow")

// movie and game
const game2 = $(".two");
const game3 = $(".three");
const movie2 = $(".movie-2");

const movie1Name = $(".movie-1-name");
const movie1Desc = $(".movie-1-desc");
const movie1Link = $(".movie-1-link");
const movie1Img = $(".movie-1-img");

const memberInfo = [
    {
    },
    {
        name: "Ngô Đức Mạnh",
        avtUrl: "../../assets/img/member-img/ngomanh.png",
        linkFace: "https://www.facebook.com/ngoduc.manh.5872",
        linkInsta: "https://www.instagram.com/ngoduc.manh.5872/?fbclid=IwAR1gWbFCFZE7eGWbxGVl8E4s80V-Cn-LkErsqmj9Gg9AAzBox_Zji51mDr8",
        linkTopTop: "https://www.tiktok.com/@manhchipboy202?is_from_webapp=1&sender_device=pc&fbclid=IwAR0sVp2U8o4NsQtWupORa1akNTEiGKFVC5KZK2I8PUSA29oby186LqSTR2c",
        email: "nmanh4030@gmail.com",
        phone: "0964***302",
        hometown: "Hải Dương",
        born: "16/08/2002",
        p1: "Hí mọi người, mình tên <b>Ngô Mạnh</b>, hiện tại đang là sinh viên <a href=\"https://daotao.humg.edu.vn/#/home\" class=\"school-name\">Trường đại học Mỏ - Địa Chất</a> và đang học chuyên ngành Công Nghê Thông Tin."
    },
    {
        name: "Trần Tiến Mạnh",
        avtUrl: "../../assets/img/member-img/tienmanh.png",
        linkFace: "https://www.facebook.com/profile.php?id=100009420821091",
        linkInsta: "https://www.instagram.com/Manhtran534/?fbclid=IwAR2JKITHYd5S5C-kmYPJlgrGv3vKkW5AuzUU591hYWbmeNr7XNjBZ2uc7Ik",
        linkTopTop: "https://www.tiktok.com/@battle_worthy?lang=vi-VN&fbclid=IwAR3iU_JtwWypd-4QnzBG5JAvXse1ngcV1UFoUWZOWV-uDzWm4UqDdiTeQG8",
        email: "manhgiang2k2@gmail.com",
        phone: "0584***124",
        hometown: "Hưng Yên",
        born: "06/04/2002",
        p1: "Hí mọi người, mình tên <b>Tiến Mạnh</b>, hiện tại đang là sinh viên <a href=\"https://daotao.humg.edu.vn/#/home\" class=\"school-name\">Trường đại học Mỏ - Địa Chất</a> và đang học chuyên ngành Công Nghê Thông Tin."


    },
    {
        name: "Lê Ngọc Lân",
        avtUrl: "../../assets/img/profile_img/lanle.jpg",
        linkFace: "https://www.facebook.com/lanle.050802",
        linkInsta: "https://www.instagram.com/lanle.050802/",
        linkTopTop: "https://www.tiktok.com/@snowlnl",
        email: "lanle101017@gmail.com",
        phone: "0763***861",
        hometown: "Thanh Hóa",
        born: "05/08/2002",
        p1: "Hí mọi người, mình tên <b>Lê Lân</b>, hiện tại đang là sinh viên <a href=\"https://daotao.humg.edu.vn/#/home\" class=\"school-name\">Trường đại học Mỏ - Địa Chất</a> và đang học chuyên ngành Công Nghê Thông Tin.",


    },
]

// set default
function defaultInfo() {
socialName.innerHTML = memberInfo[3].name;
avturl.src = memberInfo[3].avtUrl;
linkFace.href = memberInfo[3].linkFace;
linkInsta.href = memberInfo[3].linkInsta;
linkTopTop.href = memberInfo[3].linkTopTop;
email.innerHTML = memberInfo[3].email;
born.innerHTML = memberInfo[3].born;
phone.innerHTML = memberInfo[3].phone;
hometown.innerHTML = memberInfo[3].hometown;
f8.style.display = "block";
p1.innerHTML = memberInfo[3].p1;
p2.style.display = "block";
slideShow.style.display = "block";

// movie and game
game2.style.display = "block";
game3.style.display = "block";
movie2.style.display = "block";
movie1Name.innerHTML = "The Greatest ShowMan";
movie1Desc.innerHTML = "Bộ phim nhạc kịch hay và cuốn nhất mình từng xem.";
movie1Link.href = "https://www.youtube.com/watch?v=RkozLmiLBc0";
movie1Img.src = "../../assets/img/movie/showman.jpg";
}
defaultInfo();

// click-member
memberList.forEach((memberItem, index) => { 
    memberItem.onclick = () => {
        if(index == 0) {
            defaultInfo()
        } else
        if(index) {
            socialName.innerHTML = memberInfo[index].name;
            avturl.src = memberInfo[index].avtUrl;
            linkFace.href = memberInfo[index].linkFace;
            linkInsta.href = memberInfo[index].linkInsta;
            linkTopTop.href = memberInfo[index].linkTopTop;
            email.innerHTML = memberInfo[index].email;
            born.innerHTML = memberInfo[index].born;
            phone.innerHTML = memberInfo[index].phone;
            hometown.innerHTML = memberInfo[index].hometown;
            f8.style.display = "none";
            p1.innerHTML = memberInfo[index].p1;
            p2.style.display = "none";
            slideShow.style.display = "none";

            // movie and game
            game2.style.display = "none";
            game3.style.display = "none";
            movie2.style.display = "none";
            movie1Name.innerHTML = "Youtube";
            movie1Desc.innerHTML = "Là nền tảng chia sẻ video trực tuyến của Mỹ, là công cụ tìm kiếm lớn thứ hai sau Google."  
            movie1Link.href = "https://www.youtube.com";
            movie1Img.src = "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/youtube-logo.jpeg"

        }

        if(memberItem.classList.contains("mem-active")) return;

        $(".member-item.mem-active").classList.remove("mem-active");
        memberItem.classList.add("mem-active")

    }
})


// change color word
const subTitles = $$(".sub-title")
subTitles.forEach((subTitle) => {
    subTitle.style.color = "blue"
    setInterval(function() {
        subTitle.style.color = "orange"
        setTimeout(function() {
            subTitle.style.color = "blue"
        }, 2000)
    }, 4000)
})

// loading slide
const loading = $('.slide-item_loading');
var loadingTime = 0;

var x = setInterval(function() {
    let time = 10 - loadingTime
    loadingTime += 1

    loading.innerHTML = "Loading... " + time
    if (time < 1) {
        clearInterval(x)
    }
}, 1000)
setTimeout(function() {
    loading.classList.add('none')
}, 12000)


navIcons.forEach((icon) => {
    icon.onclick = function(e) {
        e.preventDefault()
    }
})

const app = {
    htmlLoad: $(".html-loading"),

    autoSlide: function() {
        let slides = document.getElementsByClassName("slide-item");
        let time = 0;


        for (var i = 0; i < slides.length; i++) {
            setInterval(function() {
                setTimeout(function() {
                    slides[0].classList.remove("none")
                }, 0)

                setTimeout(function() {
                    slides[0].classList.add("none")
                }, 3000)

                setTimeout(function() {
                    slides[1].classList.remove("none")
                }, 3000)

                setTimeout(function() {
                    slides[1].classList.add("none")
                }, 6000)

                setTimeout(function() {
                    slides[2].classList.remove("none")
                }, 6000)

                setTimeout(function() {
                    slides[2].classList.add("none")
                }, 9000)

                setTimeout(function() {
                    slides[3].classList.remove("none")
                }, 9000)

                setTimeout(function() {
                    slides[3].classList.add("none")
                }, 12000)
            }, 12000)
        }

    },

    handleLoad: function() {
        let _this = this;
        let transition = 500;
        let ok = false;

        function hiddenOverlay() {
            _this.htmlLoad.style.opacity = 0;
            setTimeout(() => {
                document.body.removeChild(_this.htmlLoad);
            }, transition)
        }

        setTimeout(() => {
            ok = !ok
        }, 1000)
        this.htmlLoad.style.transition = `opacity ${transition}ms linear`;
        window.onload = () => {
            if (ok) {
                hiddenOverlay()
            } else {
                setTimeout(hiddenOverlay, 1000)
            }
        }
    },

    handleClick: function() {

        navBars.forEach((nav, index) => {
            nav.onclick = function() {
                if (nav.classList.contains('active-nav')) return;

                const content = contents[index];
                $('.nav-name.active-nav').classList.remove('active-nav');
                this.classList.add('active-nav');


                $('.content.active').classList.remove('active');
                content.classList.add('active');

                // console.log(content)
                content.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }
        })
    },

    hadleScroll: function() {
        window.onscroll = () => {
            let bodyTop = getBody.offsetTop;
            let windowTop = window.scrollY;


            if (windowTop >= bodyTop) {
                getNav.classList.add('nav-fixed')
                getCt1.classList.add('ml')
                getCt2.classList.add('ml')
                getCt3.classList.add('ml')
                getCt4.classList.add('ml')
            } else if (windowTop < bodyTop) {
                $('.nav').classList.remove('nav-fixed')
                getCt1.classList.remove('ml')
                getCt2.classList.remove('ml')
                getCt3.classList.remove('ml')
                getCt4.classList.remove('ml')
            }


        }
    },

    start: function() {
        this.handleClick()

        this.hadleScroll()

        this.autoSlide()

        this.handleLoad()
    }
}
app.start()
