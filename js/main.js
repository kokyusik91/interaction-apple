(() => {
  let yOffset = 0; // window.scrollY 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; // 현재 활성화된 (눈 앞에 보고 있는 ) 씬 (scroll-section)

  const sceneInfo = [
    {
      type: 'sticky',
      heightNum: 5,
      // 어떤 디바이스에서 이 프로젝트를 오픈할지 모르기 때문에 고정값으로 가져 가지 않는다.
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-0'),
      },
    },
    {
      type: 'normal',
      heightNum: 5,
      // 어떤 디바이스에서 이 프로젝트를 오픈할지 모르기 때문에 고정값으로 가져 가지 않는다.
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-1'),
      },
    },
    {
      type: 'sticky',
      heightNum: 5,
      // 어떤 디바이스에서 이 프로젝트를 오픈할지 모르기 때문에 고정값으로 가져 가지 않는다.
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-2'),
      },
    },
    {
      type: 'sticky',
      heightNum: 5,
      // 어떤 디바이스에서 이 프로젝트를 오픈할지 모르기 때문에 고정값으로 가져 가지 않는다.
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-3'),
      },
    },
  ];

  function setLayOut() {
    // 각 스크롤 섹션의 높이 셋팅
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[
        i
      ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }

    console.log(sceneInfo);
  }

  // 먗반쩨 ㅅ,ㅋ,럴 섹샨ㅇ;ㄴㅈ; 핀딘
  function scrollLoop() {
    prevScrollHeight = 0;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      currentScene++;
    }
    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return; // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지
      currentScene--;
    }

    console.log(currentScene);

    document.body.setAttribute('id', `show-scene-${currentScene}`);
  }

  window.addEventListener('resize', setLayOut);
  window.addEventListener('scroll', () => {
    yOffset = window.scrollY;
    scrollLoop();
  });

  setLayOut();
})();
