// function hide and show first section
const firstSection = document.querySelector('.frist-section')
const firstSectionFirstDiv = `
                        <div class="first-section-img">
                            <div class="first-section-content animated animatedFadeInUp fadeInUp">
                            <h2>hi! <br> i'm mohamed</h2>
                            <p>my name is mohamed magdy <br> i'm a frontend devoleper  </p>
                            <button>download cv<i class="fa-solid fa-cloud-arrow-down"></i></button>
                            <div class="links">
                            <a href="https://www.linkedin.com/in/mohamed-magdy-693634245/"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://www.facebook.com/mody.magdy.75470"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://github.com/mohamed482000"><i class="fa-brands fa-github"></i></a>
                            </div>
                            </div>
                        </div>
`
const firstSectionSecondDiv = `
                    <div class="first-section-scond-img">
                        <div class="first-section-content animated animatedFadeInUp fadeInUp">
                         <h2> i am <br>a devoloper</h2>
                         <p>my name is mohamed magdy <br> i'm a frontend devoleper  </p>
                         <button>view portfolio<i class="icon-briefcase3"></i></button>
                         <div class="links">
                            <a href="https://www.linkedin.com/in/mohamed-magdy-693634245/"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://www.facebook.com/mody.magdy.75470"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://github.com/mohamed482000"><i class="fa-brands fa-github"></i></a>
                        </div>
                        </div>
                     </div>

`
let intervall = setTimeout(startCount, 4000)
setInterval(autoSlide, 9000)
function set() {
  firstSection.innerHTML = firstSectionFirstDiv
}
set()
function startCount() {
  firstSection.innerHTML = firstSectionSecondDiv
}
function autoSlide() {
  clearInterval(intervall)
  setTimeout(() => {
    firstSection.innerHTML = firstSectionFirstDiv
  }, 1000)
  setTimeout(() => {
    firstSection.innerHTML = firstSectionSecondDiv
  }, 5000)
}
// collapse
$('.collapse').collapse()
// show sections while scroll add animate to every section
var secoundSectionContent = document.querySelector('.secound-section-content')
var squarsDiv = document.querySelector('.squares')
var squareOne = document.querySelector('.square-one')
var squareTwo = document.querySelector('.square-two')
var squareThree = document.querySelector('.square-three')
var squareFour = document.querySelector('.square-four')
var rectangleAllert = document.querySelector('.rectangle-allert')
var rectangleAllertP = document.querySelector('.rectangle-allert p')
var thirdSectionHead = document.querySelector('.third-section-head')
var squareServicesSection = document.querySelector('.square-services-section')
var square456ServicesSection = document.querySelector(
  '.square456-services-section',
)
var square1Services = document.querySelector('.square1-services')
var square2Services = document.querySelector('.square2-services')
var square3Services = document.querySelector('.square3-services')
var square4Services = document.querySelector('.square4-services')
var square5Services = document.querySelector('.square5-services')
var square6Services = document.querySelector('.square6-services')
var skillsSection = document.querySelector('.skills-secion-header')
var skillsSectionfirstP = document.querySelector('.skills-section-first-p')
var skillsSectionSecondP = document.querySelector('.skills-section-second-p')
var skillsSectionH2 = document.querySelector('.skills-section-h2')
var bars = document.querySelector('.bars')
var prog = document.querySelector('.proginimation')
var prog1 = document.querySelector('.proginimation1')
var prog2 = document.querySelector('.proginimation2')
var prog3 = document.querySelector('.proginimation3')
var prog4 = document.querySelector('.proginimation4')
var educationSection = document.querySelector('.education-header')
var educationSectionP = document.querySelector('.education-header-p')
var educationSectionH2 = document.querySelector('.education-header-h2')
var educationCollapse = document.querySelector('.education-collapse')
var experienceSection = document.querySelector('.experience-header')
var experienceSectionP = document.querySelector('.experience-header-p')
var experienceSectionH2 = document.querySelector('.experience-header-h2')
var circleOne = document.querySelector('.circle-one')
var circleTwo = document.querySelector('.circle-two')
var circleThree = document.querySelector('.circle-three')
var circleFour = document.querySelector('.circle-four')
var firstCard = document.querySelector('.first-card')
var secondCard = document.querySelector('.second-card')
var thirdCard = document.querySelector('.third-card')
var fourthCard = document.querySelector('.fourth-card')
var workSectionHeader = document.querySelector('.section-work-header')
var sectionWorkP = document.querySelector('.section-work-p')
var sectionWorkH2 = document.querySelector('.section-work-h2')
var sectionWorkUl = document.querySelector('.section-work-ul')
var sectionWorkImages = document.querySelector('.section-work-images')
var sectionWorkFirstImg = document.querySelector('.first-image-work')
var sectionWorkSecondImg = document.querySelector('.second-image-work')
var sectionWorkThirdImg = document.querySelector('.third-image-work')
var sectionWorkFourthImg = document.querySelector('.fourth-image-work')
var sectionWorkFifthImg = document.querySelector('.fifth-image-work')
var sectionWorkSixImg = document.querySelector('.six-image-work')
var btnLoadMore = document.querySelector('.btn-load-more')
var blogHeader = document.querySelector('.blog-header')
var blogItems = document.querySelector('.blog-items')
var blogItemOne = document.querySelector('.blog-item-one')
var blogItemTwo = document.querySelector('.blog-item-two')
var blogItemThree = document.querySelector('.blog-item-three')
var conectHeader = document.querySelector('.conect-header')
var fristLeftInputs = document.querySelector('.frist-left-inputs')
var secondLeftInputs = document.querySelector('.second-left-inputs')
var thirdLeftInputs = document.querySelector('.third-left-inputs')
var rightInputsContact = document.querySelector('.right-inputs')

window.addEventListener('scroll', animated1)
window.addEventListener('scroll', animated2)
window.addEventListener('scroll', animated3)
window.addEventListener('scroll', animated4)
window.addEventListener('scroll', animated5)
window.addEventListener('scroll', animated6)
window.addEventListener('scroll', animated7)
window.addEventListener('scroll', animated8)
window.addEventListener('scroll', animated9)
window.addEventListener('scroll', animated10)
window.addEventListener('scroll', animated11)
window.addEventListener('scroll', animated12)
window.addEventListener('scroll', animated13)
window.addEventListener('scroll', animated14)
window.addEventListener('scroll', animated15)
window.addEventListener('scroll', animated16)
window.addEventListener('scroll', animated17)
window.addEventListener('scroll', animated18)
window.addEventListener('scroll', animated19)
window.addEventListener('scroll', animated20)
window.addEventListener('scroll', animated21)
window.addEventListener('scroll', animated22)
window.addEventListener('scroll', animated23)
window.addEventListener('scroll', animated24)
window.addEventListener('scroll', animated25)
window.addEventListener('scroll', animated26)
window.addEventListener('scroll', animated27)
window.addEventListener('scroll', animated28)
window.addEventListener('scroll', animated29)

function animated1() {
  var spaceFromTop = secoundSectionContent.offsetTop
  var windowscroll = $(window).scrollTop()

  if (windowscroll >= spaceFromTop - 500) {
    secoundSectionContent.classList.add('animated')
    secoundSectionContent.classList.add('fadeInLeft')
    secoundSectionContent.style.visibility = 'visible'
  }
}
function animated2() {
  var spaceFromTop = squarsDiv.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    squarsDiv.style.visibility = 'visible'
    squareOne.classList.add('animated')
    squareOne.classList.add('fadeInLeft')
    squareTwo.classList.add('animated2s')
    squareTwo.classList.add('fadeInUp')
    squareThree.classList.add('animated3s')
    squareThree.classList.add('fadeInUp')
    squareFour.classList.add('animated4s')
    squareFour.classList.add('fadeInRight')
  }
}
function animated3() {
  var spaceFromTop = rectangleAllert.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    rectangleAllert.style.visibility = 'visible'
    rectangleAllert.classList.add('animated')
    rectangleAllert.classList.add('fadeInLeft')
    rectangleAllertP.classList.add('rectangle-allert-p')
  }
}
function animated4() {
  var spaceFromTop = thirdSectionHead.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 450) {
    thirdSectionHead.style.visibility = 'visible'
    thirdSectionHead.classList.add('animated')
    thirdSectionHead.classList.add('fadeInLeft')
  } else {
  }
}
function animated5() {
  var spaceFromTop = squareServicesSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    squareServicesSection.style.visibility = 'visible'
    square1Services.classList.add('animated')
    square1Services.classList.add('fadeInUp')
    square2Services.classList.add('animated2s')
    square2Services.classList.add('fadeInUp')
    square3Services.classList.add('animated3s')
    square3Services.classList.add('fadeInUp')
  }
}
function animated6() {
  var spaceFromTop = square456ServicesSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    square456ServicesSection.style.visibility = 'visible'
    square4Services.classList.add('animated')
    square4Services.classList.add('fadeInUp')
    square5Services.classList.add('animated2s')
    square5Services.classList.add('fadeInUp')
    square6Services.classList.add('animated3s')
    square6Services.classList.add('fadeInUp')
  }
}
function animated7() {
  var spaceFromTop = skillsSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    skillsSection.style.visibility = 'visible'
    skillsSectionfirstP.classList.add('animated')
    skillsSectionfirstP.classList.add('fadeInLeft')
    skillsSectionH2.classList.add('animated2s')
    skillsSectionH2.classList.add('fadeInUp')
  }
}
function animated8() {
  var spaceFromTop = skillsSectionSecondP.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    skillsSectionSecondP.style.visibility = 'visible'
    skillsSectionSecondP.classList.add('animated')
    skillsSectionSecondP.classList.add('fadeInLeft')
  }
}
function animated9() {
  var spaceFromTop = bars.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 400) {
    bars.style.visibility = 'visible'
    prog.style.width = '90%'
    prog1.style.width = '75%'
    prog2.style.width = '50%'
    prog3.style.width = '30%'
    prog4.style.width = '80%'
  }
}
function animated10() {
  var spaceFromTop = educationSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    educationSection.style.visibility = 'visible'
    educationSectionP.classList.add('animated')
    educationSectionP.classList.add('fadeInLeft')
    educationSectionH2.classList.add('animated2s')
    educationSectionH2.classList.add('fadeInUp')
  }
}
function animated11() {
  var spaceFromTop = educationCollapse.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    educationCollapse.style.visibility = 'visible'
    educationCollapse.classList.add('animated')
    educationCollapse.classList.add('fadeInLeft')
  }
}
function animated12() {
  var spaceFromTop = experienceSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    experienceSection.style.visibility = 'visible'
    experienceSectionP.classList.add('animated')
    experienceSectionP.classList.add('fadeInLeft')
    experienceSectionH2.classList.add('animated2s')
    experienceSectionH2.classList.add('fadeInUp')
  }
}
function animated13() {
  var spaceFromTop = experienceSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 250) {
    circleOne.style.visibility = 'visible'
    firstCard.style.visibility = 'visible'
    circleOne.classList.add('animated')
    circleOne.classList.add('fadeInLeft')
    firstCard.classList.add('animated')
    firstCard.classList.add('fadeInLeft')
  }
}
function animated14() {
  var spaceFromTop = experienceSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 100) {
    circleTwo.style.visibility = 'visible'
    secondCard.style.visibility = 'visible'
    circleTwo.classList.add('animated')
    circleTwo.classList.add('fadeInRight')
    secondCard.classList.add('animated')
    secondCard.classList.add('fadeInRight')
  }
}
function animated15() {
  var spaceFromTop = experienceSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop + 100) {
    circleThree.style.visibility = 'visible'
    thirdCard.style.visibility = 'visible'
    circleThree.classList.add('animated')
    circleThree.classList.add('fadeInLeft')
    thirdCard.classList.add('animated')
    thirdCard.classList.add('fadeInLeft')
  }
}
function animated16() {
  var spaceFromTop = experienceSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop + 300) {
    circleFour.style.visibility = 'visible'
    fourthCard.style.visibility = 'visible'
    circleFour.classList.add('animated')
    circleFour.classList.add('fadeInUp')
    fourthCard.classList.add('animated')
    fourthCard.classList.add('fadeInUp')
  }
}
function animated17() {
  var spaceFromTop = workSectionHeader.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    workSectionHeader.style.visibility = 'visible'
    sectionWorkP.classList.add('animated')
    sectionWorkP.classList.add('fadeInLeft')
    sectionWorkH2.classList.add('animated2s')
    sectionWorkH2.classList.add('fadeInUp')
  }
}
function animated18() {
  var spaceFromTop = workSectionHeader.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 440) {
    sectionWorkUl.style.visibility = 'visible'
    sectionWorkUl.classList.add('animated')
    sectionWorkUl.classList.add('fadeInLeft')
  }
}
function animated19() {
  var spaceFromTop = sectionWorkImages.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    sectionWorkFirstImg.style.visibility = 'visible'
    sectionWorkSecondImg.style.visibility = 'visible'
    sectionWorkFirstImg.classList.add('animated')
    sectionWorkFirstImg.classList.add('fadeInLeft')
    sectionWorkSecondImg.classList.add('animated')
    sectionWorkSecondImg.classList.add('fadeInRight')
  }
}
function animated20() {
  var spaceFromTop = sectionWorkImages.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 230) {
    sectionWorkThirdImg.style.visibility = 'visible'
    sectionWorkFourthImg.style.visibility = 'visible'
    sectionWorkThirdImg.classList.add('animated')
    sectionWorkThirdImg.classList.add('fadeInLeft')
    sectionWorkFourthImg.classList.add('animated')
    sectionWorkFourthImg.classList.add('fadeInRight')
  }
}
function animated21() {
  var spaceFromTop = sectionWorkImages.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop + 70) {
    sectionWorkFifthImg.style.visibility = 'visible'
    sectionWorkSixImg.style.visibility = 'visible'
    sectionWorkFifthImg.classList.add('animated')
    sectionWorkFifthImg.classList.add('fadeInLeft')
    sectionWorkSixImg.classList.add('animated')
    sectionWorkSixImg.classList.add('fadeInRight')
  }
}
function animated21() {
  var spaceFromTop = sectionWorkImages.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop + 70) {
    sectionWorkFifthImg.style.visibility = 'visible'
    sectionWorkSixImg.style.visibility = 'visible'
    sectionWorkFifthImg.classList.add('animated')
    sectionWorkFifthImg.classList.add('fadeInLeft')
    sectionWorkSixImg.classList.add('animated')
    sectionWorkSixImg.classList.add('fadeInRight')
  }
}
function animated22() {
  var spaceFromTop = btnLoadMore.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 480) {
    btnLoadMore.style.visibility = 'visible'
    btnLoadMore.classList.add('animated')
    btnLoadMore.classList.add('fadeInUp')
  }
}
function animated23() {
  var spaceFromTop = blogHeader.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    blogHeader.style.visibility = 'visible'
    blogHeader.classList.add('animated')
    blogHeader.classList.add('fadeInLeft')
  }
}
function animated24() {
  var spaceFromTop = conectHeader.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    conectHeader.style.visibility = 'visible'
    conectHeader.classList.add('animated')
    conectHeader.classList.add('fadeInLeft')
  }
}
function animated25() {
  var spaceFromTop = blogItems.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    blogItems.style.visibility = 'visible'
    blogItemOne.classList.add('animated')
    blogItemOne.classList.add('fadeInLeft')
    setTimeout(() => {
      blogItemTwo.style.visibility = 'visible'
      blogItemTwo.classList.add('animated')
      blogItemTwo.classList.add('fadeInRight')
    }, 500)
    setTimeout(() => {
      blogItemThree.style.visibility = 'visible'
      blogItemThree.classList.add('animated')
      blogItemThree.classList.add('fadeInLeft')
    }, 1000)
  }
}
function animated26() {
  var spaceFromTop = rightInputsContact.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 500) {
    rightInputsContact.style.visibility = 'visible'
    rightInputsContact.classList.add('animated')
    rightInputsContact.classList.add('fadeInRight')
  }
}
function animated27() {
  var spaceFromTop = fristLeftInputs.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 480) {
    fristLeftInputs.style.visibility = 'visible'
    fristLeftInputs.classList.add('animated')
    fristLeftInputs.classList.add('fadeInLeft')
  }
}
function animated28() {
  var spaceFromTop = secondLeftInputs.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 550) {
    secondLeftInputs.style.visibility = 'visible'
    secondLeftInputs.classList.add('animated')
    secondLeftInputs.classList.add('fadeInLeft')
  }
}
function animated29() {
  var spaceFromTop = thirdLeftInputs.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 600) {
    thirdLeftInputs.style.visibility = 'visible'
    thirdLeftInputs.classList.add('animated')
    thirdLeftInputs.classList.add('fadeInLeft')
  }
}
// add class active to li
var secoundSection = document.querySelector('.secound-section')
var thirdSection = document.querySelector('.third-section')
var mainEducationSection = document.querySelector('.education-section')
var sectionExperience = document.querySelector('.section-experience')
var sectionWork = document.querySelector('.section-work ')
var blogSection = document.querySelector('.blog ')
var contactSection = document.querySelector('.contact-section ')

var homeUl = document.querySelector('.home')
var aboutUl = document.querySelector('.about')
var servicesUl = document.querySelector('.services')
var skillsUl = document.querySelector('.skills')
var educationUl = document.querySelector('.education')
var experienceUl = document.querySelector('.experience')
var workUl = document.querySelector('.work')
var blogUl = document.querySelector('.blogg')
var contactUl = document.querySelector('.contact')

var spaceFromTop = secoundSection.offsetTop
var spaceFromTop1 = thirdSection.offsetTop
var spaceFromTop2 = skillsSection.offsetTop
var spaceFromTop3 = mainEducationSection.offsetTop
var spaceFromTop4 = sectionExperience.offsetTop
var spaceFromTop5 = sectionWork.offsetTop
var spaceFromTop6 = blogSection.offsetTop
var spaceFromTop7 = contactSection.offsetTop

window.addEventListener('scroll', activeAbout)

function activeHome() {
  var spaceFromTop = secoundSection.offsetTop
  var windowscroll = $(window).scrollTop()
  if (windowscroll < spaceFromTop) {
    homeUl.classList.add('active')
    aboutUl.classList.remove('active')
  }
}

activeHome()
function activeAbout() {
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= spaceFromTop - 300) {
    homeUl.classList.remove('active')
    aboutUl.classList.add('active')
    if (windowscroll >= spaceFromTop1 - 400) {
      servicesUl.classList.add('active')
      aboutUl.classList.remove('active')
      if (windowscroll >= spaceFromTop2 - 400) {
        skillsUl.classList.add('active')
        servicesUl.classList.remove('active')
        if (windowscroll >= spaceFromTop3 - 400) {
          educationUl.classList.add('active')
          skillsUl.classList.remove('active')
          if (windowscroll >= spaceFromTop4 - 350) {
            educationUl.classList.remove('active')
            experienceUl.classList.add('active')
            if (windowscroll >= spaceFromTop5 - 350) {
              experienceUl.classList.remove('active')
              workUl.classList.add('active')
              if (windowscroll >= spaceFromTop6 - 400) {
                workUl.classList.remove('active')
                blogUl.classList.add('active')
                if (windowscroll >= spaceFromTop7 - 400) {
                  blogUl.classList.remove('active')
                  contactUl.classList.add('active')
                } else {
                  blogUl.classList.add('active')
                  contactUl.classList.remove('active')
                }
              } else {
                workUl.classList.add('active')
                blogUl.classList.remove('active')
              }
            } else {
              experienceUl.classList.add('active')
              workUl.classList.remove('active')
            }
          } else {
            educationUl.classList.add('active')
            experienceUl.classList.remove('active')
          }
        } else {
          skillsUl.classList.add('active')
          educationUl.classList.remove('active')
        }
      } else {
        servicesUl.classList.add('active')
        skillsUl.classList.remove('active')
      }
    } else {
      servicesUl.classList.remove('active')
      aboutUl.classList.add('active')
    }
  } else {
    homeUl.classList.add('active')
    aboutUl.classList.remove('active')
  }
}
// click on every li to scroll to her section

homeUl.addEventListener('click', () => {
  scroll({
    top: 0,
    behavior: 'smooth',
  })
})

aboutUl.addEventListener('click', () => {
  scroll({
    top: spaceFromTop + 160,
    behavior: 'smooth',
  })
})
servicesUl.addEventListener('click', () => {
  scroll({
    top: spaceFromTop1,
    behavior: 'smooth',
  })
})
skillsUl.addEventListener('click', () => {
  scroll({
    top: spaceFromTop2,
    behavior: 'smooth',
  })
})
educationUl.addEventListener('click', () => {
  scroll({
    top: spaceFromTop3,
    behavior: 'smooth',
  })
})
experienceUl.addEventListener('click', () => {
  scroll({
    top: spaceFromTop4 + 200,
    behavior: 'smooth',
  })
})
workUl.addEventListener('click', () => {
  scroll({
    top: spaceFromTop5 + 200,
    behavior: 'smooth',
  })
})
blogUl.addEventListener('click', () => {
  scroll({
    top: spaceFromTop6 + 220,
    behavior: 'smooth',
  })
})
contactUl.addEventListener('click', () => {
  scroll({
    top: spaceFromTop7 + 230,
    behavior: 'smooth',
  })
})
// numbers in services section
var divFixedImage = document.querySelector('.fixed-image')
var fixedIMgOffset = divFixedImage.offsetTop

window.addEventListener('scroll', function name() {
  var windowscroll = $(window).scrollTop()
  if (windowscroll >= fixedIMgOffset - 300) {
    const counters = document.querySelectorAll('.value')
    const counters2 = document.querySelectorAll('.value2')
    const speed = 200
    const speed2 = 1000

    counters.forEach((counter) => {
      const animate = () => {
        const value = +counter.getAttribute('akhi')
        const data = +counter.innerText

        const time = value / speed
        if (data < value) {
          counter.innerText = Math.ceil(data + time)
          setTimeout(animate, 12)
        } else {
          counter.innerText = value
        }
      }

      animate()
    })
    counters2.forEach((counter) => {
      const animate2 = () => {
        const value = +counter.getAttribute('akhi')
        const data = +counter.innerText

        const time = value / speed2
        if (data < value) {
          counter.innerText = Math.ceil(data + time)
          setTimeout(animate2, 40)
        } else {
          counter.innerText = value
        }
      }

      animate2()
    })
  }
})
// icon minue
var menuIcone = document.querySelector('.menu-icon ')
var fixedSection = document.querySelector('.fixed-section')
var pageMainContent = document.querySelector('.page-main-content')
var allPageContent = document.querySelector('.page-content')

var mood
menuIcone.addEventListener('click', showFixedSection)
function showFixedSection() {
  if (window.innerWidth < 770) {
    if (fixedSection.style.width == '0px') {
      firstSection.style.marginLeft = '300px'
      allPageContent.style.marginLeft = '300px'
      pageMainContent.style.overflow = 'hidden'
      fixedSection.style.display = 'block'
      fixedSection.style.zIndex = 10
      setTimeout(() => {
        fixedSection.style.width = '300px'
        fixedSection.style.opacity = '1'

        menuIcone.innerHTML = '<i class="fa-solid fa-xmark"></i>'
      }, 100)

      mood = 'show'
    } else {
      fixedSection.style.width = '0px'
      firstSection.style.marginLeft = '0px'
      allPageContent.style.marginLeft = '0px'
      setTimeout(() => {
        fixedSection.style.opacity = '0'
        fixedSection.style.display = 'none'
      }, 550)
      setTimeout(() => {
        menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
      }, 250)
    }
  } else {
    fixedSection.style.width = '300px'
    firstSection.style.marginLeft = '25%'
  }
}
window.addEventListener('resize', function () {
  if (window.innerWidth > 770) {
    fixedSection.style.width = '300px'
    firstSection.style.marginLeft = '25%'
    allPageContent.style.marginLeft = '27%'
    fixedSection.style.display = 'block'
    fixedSection.style.opacity = 1
    menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
  } else {
    fixedSection.style.width = '0px'
    firstSection.style.marginLeft = '0px'
    allPageContent.style.marginLeft = '0px'
    menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
  }
})
function removeFixedSection() {
  if (window.innerWidth < 770) {
    fixedSection.style.width = '0px'
  }
}
removeFixedSection()
window.addEventListener('click', hideLightBox)
window.addEventListener('scroll', hideLightBox)
function hideLightBox(e) {
  if (window.innerWidth < 770) {
    if (mood == 'show' && fixedSection.style.width == '300px') {
      fixedSection.style.width = '0px'
      firstSection.style.marginLeft = '0px'
      allPageContent.style.marginLeft = '0px'
      mood = ''
      setTimeout(() => {
        fixedSection.style.opacity = 0
        fixedSection.style.display = 'none'
        menuIcone.innerHTML = '<i class="fa-solid fa-bars"></i>'
      }, 200)
    }
  }
}
