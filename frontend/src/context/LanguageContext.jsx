import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');

  const translations = {
    en: {
      // Navbar & Common
      home: 'Home', aboutUs: 'About Us', practiceAreas: 'Practice Areas', teams: 'Teams', newsRoom: 'News Room', careers: 'Careers', contactUs: 'Contact Us', clientLogin: 'Client Login',
      // Case Diary
      caseDiary: 'Case Diary', todaysHearings: "Today's Hearings", tomorrow: 'Tomorrow', pendingCases: 'Pending Cases', decidedCases: 'Decided Cases',
      searchPlaceholder: 'Search by Case No, Client, or Court...', court: 'Court', caseType: 'Case Type', year: 'Year', stage: 'Stage', clear: 'Clear', list: 'List', calendar: 'Calendar',
      dateAndTime: 'Date & Time', caseNumber: 'Case Number', client: 'Client', action: 'Action', viewDetails: 'View Details',
      allCourts: 'All Courts', allTypes: 'All Types', allYears: 'All Years', allStages: 'All Stages', manageHearings: 'Manage your hearings and case schedules',
      newCaseFile: 'New Case File', activeFilters: 'Active Filters', type: 'Type', noHearingsFound: 'No hearings found matching your filters.', clearAllFilters: 'Clear all filters',
      calendarView: 'Calendar View', comingSoon: 'Interactive calendar coming soon...',
      // Home Page
      heroTitle: 'Lawyers Management System', heroSubtitle: 'MEER AHMED MANGRIO & ASSOCIATES', heroDesc:  'Advocate Supreme Court',
      bookAppointment: 'Book Appointment', meetOurLawyers: 'Meet Our Lawyers', aboutOurFirm: 'About Our Firm', learnMore: 'Learn More About Us',
      ourLegalServices: 'Our Legal Services', servicesDesc: 'Comprehensive legal solutions tailored to protect your rights and interests.',
      ourLawyers: 'Meet Our Expert Lawyers', lawyersDesc: 'Dedicated professionals ready to fight for your justice.', viewProfile: 'View Profile', viewAllLawyers: 'View All Lawyers',
      whyChooseOurFirm: 'Why Choose Our Firm?', expLawyers: 'Experienced Lawyers', profService: 'Professional Service', strictConf: 'Strict Confidentiality', clientFocus: 'Client-Focused Approach', timelyAssist: 'Timely Assistance',
      needLegalAssist: 'Need Legal Assistance?', needLegalDesc: 'Schedule a consultation with one of our experienced lawyers today.', bookNow: 'Book an Appointment Now',
      clientTestimonials: 'Client Testimonials', contactLocation: 'Contact & Office Location', ourOffice: 'Our Office', phone: 'Phone', email: 'Email', officeTimings: 'Office Timings', contactUsBtn: 'Contact Us', mapPlaceholder: 'Google Maps Integration',
      // Add Case Page
      createNewCase: 'Create New Case File', courtCaseDetails: 'Court & Case Details', inTheCourtOf: 'In The Court of', natureOfCase: 'Nature of Case',
      civilSuit: 'Civil Suit', criminal: 'Criminal', constPetition: 'Constitutional Petition', miscApp: 'Misc. Application', appeal: 'Appeal',
      partyTypeLeft: 'Party Type (Left)', plaintiff: 'Plaintiff', petitioner: 'Petitioner', applicant: 'Applicant', complainant: 'Complainant', appellant: 'Appellant',
      versus: 'VERSUS', partyTypeRight: 'Party Type (Right)', defendant: 'Defendant', respondent: 'Respondent', opponent: 'Opponent', accused: 'Accused', judgementDebtor: 'Judgement-Debtor',
      caseTimeline: 'Case Timeline & Subject', subjectTitle: 'Subject / Title of Case', engagedOn: 'Engaged On', filedOn: 'Filed On', decidedOn: 'Decided On', result: 'Result',
      pending: '-- Pending --', decreed: 'Decreed', dismissed: 'Dismissed', withdrawn: 'Withdrawn', acquitted: 'Acquitted (Criminal)',
      clientInfo: 'Client Information', clientNameFor: 'Client Name (For)', cellNumber: 'Cell Number',
      hearingHistory: 'Hearing History (Particulars)', addHearing: 'Add Hearing', dateOfHearing: 'Date of Hearing', particularsOrder: 'Particulars (Order/Status)',
      cancel: 'Cancel', saveCaseFile: 'Save Case File',
      // Dashboard & Profile
      dashboard: 'Dashboard', activeCases: 'Active Cases', upcomingHearings: 'Upcoming Hearings', documents: 'Documents', wonCases: 'Won Cases',
      recentCases: 'Recent Cases', viewAll: 'View All', updated: 'Updated', upcoming: 'Upcoming', judge: 'Judge',
      myProfile: 'My Profile', manageProfInfo: 'Manage your professional information', editProfile: 'Edit Profile',
      profInfo: 'Professional Information', licenseNum: 'License Number', barAssoc: 'Bar Association', yearsExp: 'Years of Experience', education: 'Education', university: 'University', gradYear: 'Graduation Year', specialization: 'Specialization',
      basicInfo: 'Basic Information', aboutLawyer: 'About Lawyer', servicesOffered: 'Services Offered', casesExp: 'Cases & Experience',
      // Login / Signup
      welcomeBack: 'Welcome Back', loginToAccess: 'Login to access your dashboard', emailAddress: 'Email Address', password: 'Password', loginBtn: 'Login', dontHaveAccount: "Don't have an account?", signUpHere: 'Sign up here',
      createAccount: 'Create Account', signUpToAccess: 'Sign up to create your account', fullName: 'Full Name', confirmPassword: 'Confirm Password', signUpBtn: 'Sign Up', alreadyHaveAccount: 'Already have an account?', loginHere: 'Login here',
    
    // 👇 ye team members ki data ya information 👇

advocateSupremeCourt: 'Advocate Supreme Court',
founderSeniorPartner: 'FOUNDER & SENIOR PARTNER',
ourLegalTeam: 'Our Legal Team',
experiencedAdvocates: 'Experienced advocates specializing in various areas of law',
highCourtOfSindh: 'High Court of Sindh',
mainOffice: 'Main Office',
nearHighCourtOfSindh: 'Near High Court of Sindh',
contactNumbers: 'Contact Numbers',
main: 'Main',
teamMembersCount: '12 Team Members',
available247: 'Available 24/7',
practiceAreas: 'Practice Areas',
criminalCivilConstitutional: 'Criminal, Civil, Constitutional',
corporateFamilyProperty: 'Corporate, Family, Property',
more: 'More',
needLegalAssistance: 'Need Legal Assistance?',
contactAnyTeamMember: 'Contact any of our team members for professional legal consultation',
callSeniorPartner: 'Call Senior Partner',
contactTeam: 'Contact Team',
// Contact Page
getInTouchWithOurLawFirm: 'Get In Touch With Our Law Firm',
officeAddress: 'Office Address',
whatsapp: 'WhatsApp',
urgentLegalAssistance: 'Urgent Legal Assistance',
callNow: 'Call Now',
sendUsAMessage: 'Send Us a Message',
messageSentSuccessfully: 'Message sent successfully!',
fullName: 'Full Name',
describeYourLegalMatter: 'Describe your legal matter...',
sendMessage: 'Send Message',
officeLocation: 'Office Location',
googleMapsIntegration: 'Google Maps Integration',
bookAppointmentWithOurLawyers: 'Book Appointment with Our Lawyers',
scheduleAConsultationToday: 'Schedule a consultation today',
bookAnAppointment: 'Book an Appointment',
selectYourPreferredLawyerAndTime: 'Select your preferred lawyer and time',
appointmentBookedSuccessfully: 'Appointment booked successfully!',
selectLawyer: 'Select Lawyer',
selectPracticeArea: 'Select Practice Area',
selectDate: 'Select Date',
selectTime: 'Select Time',
caseDetails: 'Case Details',
brieflyDescribeYourCase: 'Briefly describe your case',
confirmAppointment: 'Confirm Appointment',
criminalLaw: 'Criminal Law',
civilLaw: 'Civil Law',
familyLaw: 'Family Law',
corporateLaw: 'Corporate Law',
propertyLaw: 'Property Law',
constitutionalLaw: 'Constitutional Law',
heroTitle: 'Lawyers Management System',
firmName: 'MEER AHMED MANGRIO & ASSOCIATES',
advocateTitle: 'Advocate Supreme Court',
heroDesc: 'Empowering you with expert legal guidance, transparent case tracking, and dedicated representation for all your legal matters.',
lawyersManagementSystem: 'Lawyers Management System',
},
    ur: {
      // Navbar & Common
      home: 'ہوم', aboutUs: 'ہمارے بارے میں', practiceAreas: 'خدمات', teams: 'ٹیم', newsRoom: 'خبریں', careers: 'کیریئر', contactUs: 'رابطہ کریں', clientLogin: 'کلائنٹ لاگن',
      // Case Diary
      caseDiary: 'کیس ڈائری', todaysHearings: 'آج کی سماعتیں', tomorrow: 'کل', pendingCases: 'زیر التواء مقدمات', decidedCases: 'فیصلہ شدہ مقدمات',
      searchPlaceholder: 'کیس نمبر، کلائنٹ یا کورٹ سے تلاش کریں...', court: 'کورٹ', caseType: 'کیس کی قسم', year: 'سال', stage: 'مرحلہ', clear: 'صاف کریں', list: 'فہرست', calendar: 'کیلنڈر',
      dateAndTime: 'تاریخ اور وقت', caseNumber: 'کیس نمبر', client: 'کلائنٹ', action: 'عمل', viewDetails: 'تفصیلات دیکھیں',
      allCourts: 'تمام کورٹس', allTypes: 'تمام اقسام', allYears: 'تمام سال', allStages: 'تمام مراحل', manageHearings: 'اپنی سماعتوں اور کیس شیڈول کا انتظام کریں',
      newCaseFile: 'نیا کیس فائل', activeFilters: 'فعال فلٹرز', type: 'قسم', noHearingsFound: 'آپ کے فلٹرز سے ملتی جلتی کوئی سماعت نہیں ملی۔', clearAllFilters: 'تمام فلٹرز صاف کریں',
      calendarView: 'کیلنڈر ویو', comingSoon: 'انٹرایکٹو کیلنڈر جلد آرہا ہے...',
      // Home Page
      heroTitle: 'پیشہ ورانہ قانونی خدمات', heroSubtitle: 'جن پر آپ بھروسہ کر سکتے ہیں', heroDesc: 'ماہر قانونی رہنمائی، شفاف کیس ٹریکنگ، اور آپ کے تمام قانونی معاملات کے لیے وقف نمائندگی کے ساتھ آپ کو بااختیار بنانا۔',
      bookAppointment: 'اپوائنٹمنٹ بک کریں', meetOurLawyers: 'ہمارے وکلاء سے ملیں', aboutOurFirm: 'ہمارے فرم کے بارے میں', learnMore: 'ہمارے بارے میں مزید جانیں',
      ourLegalServices: 'ہماری قانونی خدمات', servicesDesc: 'آپ کے حقوق اور مفادات کے تحفظ کے لیے جامع قانونی حل۔',
      ourLawyers: 'ہمارے ماہر وکلاء سے ملیں', lawyersDesc: 'آپ کے انصاف کے لیے لڑنے کے لیے تیار وقف پیشہ ور افراد۔', viewProfile: 'پروفائل دیکھیں', viewAllLawyers: 'تمام وکلاء دیکھیں',
      whyChooseOurFirm: 'ہمارے فرم کو کیوں چنیں؟', expLawyers: 'تجربہ کار وکلاء', profService: 'پیشہ ورانہ خدمت', strictConf: 'سخت رازداری', clientFocus: 'کلائنٹ پر مبنی نقطہ نظر', timelyAssist: 'بروقت مدد',
      needLegalAssist: 'قانونی مدد کی ضرورت ہے؟', needLegalDesc: 'آج ہی ہمارے تجربہ کار وکلاء میں سے کسی ایک کے ساتھ مشاورت شیڈول کریں۔', bookNow: 'ابھی اپوائنٹمنٹ بک کریں',
      clientTestimonials: 'کلائنٹ کی تعریفیں', contactLocation: 'رابطہ اور دفتر کا مقام', ourOffice: 'ہمارا دفتر', phone: 'فون', email: 'ای میل', officeTimings: 'دفتر کے اوقات', contactUsBtn: 'ہم سے رابطہ کریں', mapPlaceholder: 'گوگل میپس انٹیگریشن',
      // Add Case Page
      createNewCase: 'نیا کیس فائل بنائیں', courtCaseDetails: 'کورٹ اور کیس کی تفصیلات', inTheCourtOf: 'عدالت', natureOfCase: 'کیس کی نوعیت',
      civilSuit: 'دیوانی دعویٰ', criminal: 'فوجداری', constPetition: 'آئینی درخواست', miscApp: 'متفرق درخواست', appeal: 'اپیل',
      partyTypeLeft: 'فریق کی قسم (بائیں)', plaintiff: 'مدعی', petitioner: 'درخواست دہندہ', applicant: 'درخواست دہندہ', complainant: 'فریادی', appellant: 'اپیلنٹ',
      versus: 'بمقابلہ', partyTypeRight: 'فریق کی قسم (دائیں)', defendant: 'مدعا علیہ', respondent: 'جواب دہندہ', opponent: 'مخالف', accused: 'ملزم', judgementDebtor: 'ججمنٹ ڈیبٹر',
      caseTimeline: 'کیس کا ٹائم لائن اور موضوع', subjectTitle: 'کیس کا موضوع / عنوان', engagedOn: 'مصروف تاریخ', filedOn: 'فائلنگ کی تاریخ', decidedOn: 'فیصلے کی تاریخ', result: 'نتیجہ',
      pending: '-- زیر التواء --', decreed: 'ڈگری شدہ', dismissed: 'خارج شدہ', withdrawn: 'واپس لیا گیا', acquitted: 'بری (فوجداری)',
      clientInfo: 'کلائنٹ کی معلومات', clientNameFor: 'کلائنٹ کا نام (کے لیے)', cellNumber: 'موبائل نمبر',
      hearingHistory: 'سماعت کی تاریخ (تفصیلات)', addHearing: 'سماعت شامل کریں', dateOfHearing: 'سماعت کی تاریخ', particularsOrder: 'تفصیلات (آرڈر/حیثیت)',
      cancel: 'منسوخ کریں', saveCaseFile: 'کیس فائل محفوظ کریں',
      // Dashboard & Profile
      dashboard: 'ڈیش بورڈ', activeCases: 'فعال مقدمات', upcomingHearings: 'آنے والی سماعتیں', documents: 'دستاویزات', wonCases: 'جیتے ہوئے مقدمات',
      recentCases: 'حالیہ مقدمات', viewAll: 'سب دیکھیں', updated: 'اپ ڈیٹ', upcoming: 'آنے والا', judge: 'جج',
      myProfile: 'میری پروفائل', manageProfInfo: 'اپنی پیشہ ورانہ معلومات کا انتظام کریں', editProfile: 'پروفائل میں ترمیم کریں',
      profInfo: 'پیشہ ورانہ معلومات', licenseNum: 'لائسنس نمبر', barAssoc: 'بار ایسوسی ایشن', yearsExp: 'تجربے کے سال', education: 'تعلیم', university: 'یونیورسٹی', gradYear: 'فارغ التحصیلی کا سال', specialization: 'تخصص',
      basicInfo: 'بنیادی معلومات', aboutLawyer: 'وکیل کے بارے میں', servicesOffered: 'پیش کردہ خدمات', casesExp: 'مقدمات اور تجربہ',
      // Login / Signup
      welcomeBack: 'خوش آمدید', loginToAccess: 'اپنے ڈیش بورڈ تک رسائی کے لیے لاگ ان کریں', emailAddress: 'ای میل ایڈریس', password: 'پاس ورڈ', loginBtn: 'لاگ ان', dontHaveAccount: 'اکاؤنٹ نہیں ہے؟', signUpHere: 'یہاں سائن اپ کریں',
      createAccount: 'اکاؤنٹ بنائیں', signUpToAccess: 'اپنا اکاؤنٹ بنانے کے لیے سائن اپ کریں', fullName: 'پورا نام', confirmPassword: 'پاس ورڈ کی تصدیق کریں', signUpBtn: 'سائن اپ', alreadyHaveAccount: 'پہلے سے اکاؤنٹ ہے؟', loginHere: 'یہاں لاگ ان کریں',
    //  Ye lines ur: { ke andar paste karein 👇

advocateSupremeCourt: 'ایڈووکیٹ سپریم کورٹ',
founderSeniorPartner: 'بانی و سینئر پارٹنر',
ourLegalTeam: 'ہماری قانونی ٹیم',
experiencedAdvocates: 'مختلف شعبوں میں مہارت رکھنے والے تجربہ کار وکلاء',
highCourtOfSindh: 'ہائی کورٹ آف سندھ',
mainOffice: 'مرکزی دفتر',
nearHighCourtOfSindh: 'ہائی کورٹ آف سندھ کے قریب',
contactNumbers: 'رابطہ نمبر',
main: 'مرکزی',
teamMembersCount: '12 ٹیم ممبران',
available247: 'چوبیس گھنٹے دستیاب',
practiceAreas: 'ممارتی علاقے',
criminalCivilConstitutional: 'فوجداری، دیوانی، آئینی',
corporateFamilyProperty: 'کارپوریٹ، خاندانی، جائیداد',
more: 'مزید',
needLegalAssistance: 'قانونی مدد کی ضرورت ہے؟',
contactAnyTeamMember: 'پیشہ ورانہ قانونی مشاورت کے لیے ہماری ٹیم کے کسی بھی رکن سے رابطہ کریں',
callSeniorPartner: 'سینئر پارٹنر کو کال کریں',
contactTeam: 'ٹیم سے رابطہ کریں',
// Contact Page
getInTouchWithOurLawFirm: 'ہمارے قانونی فرم سے رابطہ کریں',
officeAddress: 'دفتر کا پتہ',
whatsapp: 'واٹس ایپ',
urgentLegalAssistance: 'فوری قانونی مدد',
callNow: 'ابھی کال کریں',
sendUsAMessage: 'ہمیں پیغام بھیجیں',
messageSentSuccessfully: 'پیغام کامیابی سے بھیج دیا گیا!',
fullName: 'پورا نام',
describeYourLegalMatter: 'اپنے قانونی معاملے کی وضاحت کریں...',
sendMessage: 'پیغام بھیجیں',
officeLocation: 'دفتر کا مقام',
googleMapsIntegration: 'گوگل میپس انٹیگریشن',
bookAppointmentWithOurLawyers: 'ہمارے وکلاء کے ساتھ اپوائنٹمنٹ بک کریں',
scheduleAConsultationToday: 'آج ہی مشاورت شیڈول کریں',
bookAnAppointment: 'اپوائنٹمنٹ بک کریں',
selectYourPreferredLawyerAndTime: 'اپنا پسندیدہ وکیل اور وقت منتخب کریں',
appointmentBookedSuccessfully: 'اپوائنٹمنٹ کامیابی سے بک گئی!',
selectLawyer: 'وکیل منتخب کریں',
selectPracticeArea: 'ممارتی شعبہ منتخب کریں',
selectDate: 'تاریخ منتخب کریں',
selectTime: 'وقت منتخب کریں',
caseDetails: 'کیس کی تفصیلات',
brieflyDescribeYourCase: 'اپنے کیس کا مختصر تعارف دیں',
confirmAppointment: 'اپوائنٹمنٹ کی تصدیق کریں',
criminalLaw: 'فوجداری قانون',
civilLaw: 'دیوانی قانون',
familyLaw: 'خاندانی قانون',
corporateLaw: 'کارپوریٹ قانون',
propertyLaw: 'جائیداد کا قانون',
constitutionalLaw: 'آئینی قانون',
heroTitle: 'لائیرز مینجمنٹ سسٹم',
firmName: 'میر احمد منگریو اینڈ اسوسی ایٹس',
advocateTitle: 'ایڈووکیٹ سپریم کورٹ',
lawyersManagementSystem: 'لائیرز مینجمنٹ سسٹم',
},
    ar: {
      // Arabic translations (Shortened for space, but structure is identical to Urdu)
      home: 'الرئيسية', aboutUs: 'من نحن', practiceAreas: 'مجالات الممارسة', clientLogin: 'تسجيل دخول العميل',
      caseDiary: 'سجل القضايا', todaysHearings: 'جلسات اليوم', pendingCases: 'القضايا المعلقة', decidedCases: 'القضايا المحكومة',
      newCaseFile: 'ملف قضية جديد', court: 'المحكمة', caseType: 'نوع القضية', year: 'السنة', stage: 'المرحلة',
      heroTitle: 'خدمات قانونية مهنية', heroSubtitle: 'يمكنك الوثوق بها', bookAppointment: 'حجز موعد',
      createNewCase: 'إنشاء ملف قضية جديد', courtCaseDetails: 'تفاصيل المحكمة والقضية', saveCaseFile: 'حفظ ملف القضية',
      dashboard: 'لوحة التحكم', activeCases: 'القضايا النشطة', myProfile: 'ملفي الشخصي', loginBtn: 'تسجيل الدخول',
      // 👇 Ye lines team member ki language krni ky lea 👇

advocateSupremeCourt: 'محامي المحكمة العليا',
founderSeniorPartner: 'المؤسس والشريك الأول',
ourLegalTeam: 'فريقنا القانوني',
experiencedAdvocates: 'محامون ذوو خبرة متخصصون في مختلف مجالات القانون',
highCourtOfSindh: 'المحكمة العليا في السند',
mainOffice: 'المكتب الرئيسي',
contactNumbers: 'أرقام الاتصال',
teamMembersCount: '12 عضوًا في الفريق',
practiceAreas: 'مجالات الممارسة',
needLegalAssistance: 'هل تحتاج إلى مساعدة قانونية؟',
callSeniorPartner: 'اتصل بالشريك الأول',
contactTeam: 'اتصل بالفريق',
heroTitle: 'نظام إدارة المحامين',
firmName: 'مير أحمد منغريو وشركاؤه',
advocateTitle: 'محامي المحكمة العليا',
lawyersManagementSystem: 'نظام إدارة المحامين',
}
  };

  const t = (key) => translations[currentLang][key] || key;
  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    document.dir = lang === 'ar' || lang === 'ur' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ currentLang, t, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};