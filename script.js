const translations = {
  en: {
    navAbout: "About",
    navProjects: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    heroTitle: "Hey, I'm Ryan.",
    heroIntro:
      "As a software developer passionate about game development and XR experience design, and a former Product Manager with multi-industry experience, I bring a unique blend of user-centric creativity and technical depth.",
    resumeDownload: "Download Resume",
    projectsTitle: "Project Experience",
    projectOneTitle: "LLM-Driven Mixed Reality Cooking Assistant",
    projectOneDesc:
      "Developed a Meta Quest 3 application using Passthrough and Gemini 2.5 Flash to recognize ingredients, generate structured recipes, and support a context-aware assistant with voice, image, and gesture interaction.",
    projectTwoTitle: "Multiplayer Kitchen Simulation Game",
    projectTwoDesc:
      "Developed a multiplayer cooking game using a hybrid-authoritative architecture to support seamless collaborative gameplay, including ingredient preparation, cooking, and meal delivery, while implementing a full lobby, authentication, and relay system for stable session management.",
    projectThreeTitle: "Ray Tracing Renderer",
    projectThreeDesc:
      "Developed a photorealistic ray tracing renderer from scratch, featuring PBR material support, advanced processing effects like depth of field, MSAA, and gamma correction, optimized with BVH acceleration structures.",
    demo: "Demo",
    source: "Source",
    experienceTitle: "Work Experience",
    sonyName: "Sony",
    sonyRole: "Research Intern",
    sonyPointOne:
      "Developed a multi-modal ReID framework for competitive sports by integrating global appearance, jersey numbers, and fine-grained shoe attributes, achieving a Rank-1 accuracy of 92% in complex multi-player tracking scenarios.",
    sonyPointTwo:
      "Implemented a multi-frame temporal aggregation mechanism to mitigate feature degradation caused by severe occlusions, further enhancing the robustness of the identity representation.",
    byteName: "ByteDance",
    byteRole: "Product Intern",
    bytePointOne:
      "Conducted user flow design for the wrong-answer printing module, translating qualitative insights into technical solutions.",
    bytePointTwo:
      "Collaborated closely with engineering and design teams to drive rapid prototyping and feature implementation, directly improving end-user review efficiency.",
    educationTitle: "Education",
    lundName: "Lund University",
    lundDegree: "M.S. · Virtual Reality and Augmented Reality",
    bfuName: "Beijing Forestry University",
    bfuDegree: "B.E. · Computer Science and Technology",
    projectOneDemoLink: "https://youtu.be/_ZVHRI_Nj2w?si=hJ-axUQ_6BE3Js2e",
    projectTwoDemoLink: "https://youtu.be/_57qMmRY7FE?si=FKY9Mjb-aX3T1wHZ"
  },
  zh: {
    navAbout: "关于我",
    navProjects: "项目经历",
    navExperience: "工作经历",
    navEducation: "教育经历",
    heroTitle: "你好，我是穆然。",
    heroIntro:
      "作为一名热衷于游戏开发与 XR 体验设计的软件开发者，以及拥有跨行业经验的前产品经理，我致力于融合以用户为中心的创造力与前沿的技术。",
    resumeDownload: "下载简历",
    projectsTitle: "项目经历",
    projectOneTitle: "LLM 驱动的混合现实烹饪助手",
    projectOneDesc:
      "基于 Meta Quest 3 开发应用，结合 Passthrough 与 Gemini 2.5 Flash 识别食材并生成结构化食谱；实现支持语音、图像和手势交互的上下文感知虚拟助手。",
    projectTwoTitle: "多人联机厨房模拟游戏",
    projectTwoDesc:
      "使用混合权威架构搭建多人厨房模拟游戏，支持多人协同进行食材切配、烹饪及出餐等核心交互功能，实现了完整的玩家大厅、身份验证和中继服务。",
    projectThreeTitle: "光线追踪渲染器",
    projectThreeDesc:
      "从零构建了一个光线追踪渲染器，支持多种 PBR 材质，集成了景深、抗锯齿和伽马校正等图像处理技术，并引入了层次包围盒空间加速结构。实现了照片级的渲染输出效果。",
    demo: "演示",
    source: "源码",
    experienceTitle: "工作经历",
    sonyName: "索尼",
    sonyRole: "算法实习生",
    sonyPointOne:
      "构建针对竞技体育的多模态球员重识别框架，整合全局外观、球衣编号及鞋履细粒度特征，在复杂多人场景下实现 92% 的 Rank-1 识别准确率。",
    sonyPointTwo: "引入多帧时序聚合机制，解决了严重遮挡下的特征损失问题，显著提升了身份识别的稳定性与鲁棒性。",
    byteName: "字节跳动",
    byteRole: "产品实习生",
    bytePointOne: "负责错题打印模块的用户流程设计，将定性分析结论转化为技术解决方案。",
    bytePointTwo: "与工程及设计团队紧密协作，推动快速原型开发与功能落地，显著提升了终端用户的复习效率。",
    educationTitle: "教育经历",
    lundName: "隆德大学",
    lundDegree: "硕士 · 虚拟现实与增强现实",
    bfuName: "北京林业大学",
    bfuDegree: "本科 · 计算机科学与技术",
    projectOneDemoLink: "https://www.bilibili.com/video/BV1rHDtBzEjh/",
    projectTwoDemoLink: "https://www.bilibili.com/video/BV14WVh6NERH/"
  },
};

const toggle = document.querySelector(".icon-button");
const label = document.querySelector("[data-lang-label]");
const nodes = document.querySelectorAll("[data-i18n]");
const resumeLink = document.querySelector("[data-resume-link]");
const linkNodes = document.querySelectorAll("[data-i18n-href]");
let currentLanguage = localStorage.getItem("portfolioLanguage") || "en";

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  nodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[language][key] || node.textContent;
  });

  linkNodes.forEach((node) => {
    const key = node.dataset.i18nHref;
    if (translations[language][key]) {
      node.href = translations[language][key];
    }
  });

  if (language === "zh") {
    resumeLink.href = "assets/Mu_Ran_CV_CN.pdf";
    resumeLink.setAttribute("download", "穆然_简历.pdf");
  } else {
    resumeLink.href = "assets/Ran_Mu_CV.pdf";
    resumeLink.setAttribute("download", "Ran_Mu_CV.pdf");
  }

  label.textContent = language === "zh" ? "EN" : "中文";
  localStorage.setItem("portfolioLanguage", language);
}

toggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
});

applyLanguage(currentLanguage);

const galleryBtn = document.querySelector('.demo-gallery-btn');
const modal = document.getElementById('gallery-modal');
const galleryImage = document.getElementById('gallery-image');
const prevBtn = document.querySelector('.modal-prev');
const nextBtn = document.querySelector('.modal-next');
const dotsContainer = document.getElementById('modal-dots');

const galleryImages = [
  'assets/ray-tracing-1.jpg',
  'assets/ray-tracing-2.jpg',
  'assets/ray-tracing-3.jpg'
];

let currentImageIndex = 0;

function updateGalleryImage() {
  if (!galleryImage) return;
  const src = galleryImages[currentImageIndex];
  if (src) {
    galleryImage.src = src;
  }
  updateDots();
}

function updateDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  galleryImages.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'modal-dot' + (index === currentImageIndex ? ' active' : '');
    dot.setAttribute('aria-label', `Go to image ${index + 1}`);
    dot.addEventListener('click', () => {
      currentImageIndex = index;
      updateGalleryImage();
    });
    dotsContainer.appendChild(dot);
  });
}

function openModal() {
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    modal.style.zIndex = 9999;
  }
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

if (galleryBtn) {
  galleryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentImageIndex = 0;
    updateGalleryImage();
    openModal();
  });
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (!galleryImages.length) return;
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateGalleryImage();
  });
}
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (!galleryImages.length) return;
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryImage();
  });
}

document.addEventListener('keydown', (e) => {
  if (!modal || !modal.classList.contains('active')) return;
  if (e.key === 'Escape') return closeModal();
  if (e.key === 'ArrowRight') {
    if (!galleryImages.length) return;
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateGalleryImage();
  }
  if (e.key === 'ArrowLeft') {
    if (!galleryImages.length) return;
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryImage();
  }
});
