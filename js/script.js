// Language translations
const translations = {
  en: {
    welcome: "Welcome to Onesmos Nesib Academy",
    motto: "Empowering Future Leaders in Nekemte, Oromia",
    students: "Students",
    teachers: "Teachers",
    years: "Years",
    nav_home: "Home",
    nav_about: "About",
    nav_admission: "Admission",
    nav_academic: "Academics",
    nav_gallery: "Gallery",
    nav_news: "News",
    nav_registration: "Registration",
    nav_login: "Login",
    nav_contact: "Contact",
    nav_portal: "Portal",

    about_title: "About Onesmos Nesib Academy",
    about_text: "Onesmos Nesib Academy is a leading primary and secondary school located in Nekemte, Oromia, Ethiopia. We are dedicated to providing quality education and empowering future leaders through a modern and creative learning environment.",
    admission_title: "Admission Requirements",
    admission_req1: "Completed primary school certificate",
    admission_req2: "Birth certificate",
    admission_req3: "Recent passport-sized photos",
    admission_req4: "Completed application form",
    admission_form_title: "Apply Now",
    submit: "Submit",

    academic_title: "Academic Programs",
    academic_desc: "We offer a wide range of subjects to prepare students for success:",
    gallery_title: "Gallery",
    news_title: "Latest News",

    registration_title: "Student Registration",
    reg_fullname_label: "Full Name:",
    reg_email_label: "Email:",
    reg_grade_label: "Grade:",
    reg_select_grade: "Select Grade",
    reg_desc_label: "Describe Yourself (upload a file):",

    login_title: "Login",
    login_username_label: "Username:",
    login_password_label: "Password:",
    login_button: "Login",
    forgot_password: "Forgot Password?",
    login_info: "For students, your password is provided by the admin.",

    portal_title: "User Portal",
    student_dashboard: "Student Dashboard",
    admin_dashboard: "Admin Dashboard",

    student_dashboard_title: "Student Dashboard",
    welcome_student: "Welcome,",
    subject: "Subject",
    first_mid: "1st Mid (20)",
    second_mid: "2nd Mid (20)",
    final_exam: "Final Exam (60)",
    total: "Total (100)",
    average_score: "Average Score",
    result: "Result",

    admin_dashboard_title: "Admin Dashboard",
    add_student: "Add Student",
    edit_student: "Edit Student",
    view_grades: "View Grades",
    settings: "Settings",
    student_name: "Student Name",
    grade: "Grade",
    username: "Username",
    password: "Password",
    actions: "Actions"
  },
  om: {
    welcome: "Baga Nagaan Dhufte Onesmos Nesib Academy",
    motto: "Qopheessitoota Fuulduraa Dandeessisu",
    students: "Barattoota",
    teachers: "Barsiisota",
    years: "Waggaa",
    nav_home: "Mana",
    nav_about: "Waa'ee",
    nav_admission: "Galmee",
    nav_academic: "Barnoota",
    nav_gallery: "Suuraa",
    nav_news: "Odeeffannoo",
    nav_registration: "Galmee Barataa",
    nav_login: "Seensa",
    nav_contact: "Quunnamtii",
    nav_portal: "Balbala",

    about_title: "Waa'ee Onesmos Nesib Academy",
    about_text: "Onesmos Nesib Academy mana barnootaa sadarkaa jalqabaa fi giddu galeessaa magaalaa Nekemte, Oromia keessatti argamtuudha. Barnoota qulqullina qabuufi qopheessitoota fuulduraa uumuuf hojjechaa jirra.",
    admission_title: "Barbaachisummaa Galmee",
    admission_req1: "Thisa primarii guutame",
    admission_req2: "Galmee dhalootaa",
    admission_req3: "Suuraa baay’ee yeroo dhiyoo fudhatame",
    admission_req4: "Foormii guutame",
    admission_form_title: "Ammas galmaa’ii",
    submit: "Ergaa",

    academic_title: "Barnoota",
    academic_desc: "Barnoota garagaraa kanneen barattoota milkaa'inaaf qopheessu ni kennina:",
    gallery_title: "Suuraa",
    news_title: "Odeeffannoo Haaraa",

    registration_title: "Galmee Barataa",
    reg_fullname_label: "Maqaa Guutuu:",
    reg_email_label: "Imeelii:",
    reg_grade_label: "Sadarkaa Barnootaa:",
    reg_select_grade: "Sadarkaa filadhu",
    reg_desc_label: "Of ibsi (faayilii fe'ii):",

    login_title: "Seensa",
    login_username_label: "Maqaa fayyadamaa:",
    login_password_label: "Jecha darbii:",
    login_button: "Seeni",
    forgot_password: "Jecha darbii irra deebii?",
    login_info: "Barattootaaf jechi darbii hojii isaa mana barumsaa kennameera.",

    portal_title: "Balbala Fayyaa",
    student_dashboard: "Balbala Barataa",
    admin_dashboard: "Balbala Bulchaa",

    student_dashboard_title: "Balbala Barataa",
    welcome_student: "Baga Nagaan Dhuftan,",
    subject: "Mata Duree",
    first_mid: "Midii 1ffaa (20)",
    second_mid: "Midii 2ffaa (20)",
    final_exam: "Qormaata Xumuraa (60)",
    total: "Guutuu (100)",
    average_score: "Safartuu Giddugaleessaa",
    result: "Bu'aa",

    admin_dashboard_title: "Balbala Bulchaa",
    add_student: "Barataa Haaraa Galchuu",
    edit_student: "Barataa Sirreessuu",
    view_grades: "Safartuu Ilaaluu",
    settings: "To'annoo",
    student_name: "Maqaa Barataa",
    grade: "Sadarkaa",
    username: "Maqaa Fayyadamaa",
    password: "Jecha Darbii",
    actions: "Hojiwwan"
  }
};

// Change language on selection
const langSelect = document.getElementById("lang-select");
langSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});

// Theme toggle button
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Counter animation
document.querySelectorAll(".count").forEach((counter) => {
  const updateCount = () => {
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 15);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});
