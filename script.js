var L = 'ar',
    AD = null,
    AS = 0;
var IM = {
    g: 'images/glowia.png',
    y: 'images/your-gym.png',
    n: 'images/nawaem.png',
    c: 'images/my-cafe.png'
};

var D = {
    g: {
        name: {
            a: 'عيادة غلويا',
            e: 'Glowia Clinic'
        },
        cl: 'gl',
        ik: 'g',
        sec: [{
                n: {
                    a: 'التغذية',
                    e: 'Nutrition'
                },
                ic: '',
                it: [{
                        a: 'استشارة وفحص بميزان inbody',
                        e: 'InBody Consultation & Analysis',
                        da: 'تحليل تركيبة الجسم من عضلات ودهون ووضع هدف مخصص',
                        de: 'InBody analysis of body composition & fat distribution',
                        p: 75000
                    },
                    {
                        a: 'برنامج غذائي شهري مع متابعة ',
                        e: 'Monthly Nutrition Plan with Follow-up',
                        da: 'متابعة مستمرة واجابة على الاستفسارات لمدة شهر مع وضع هدف وزن للوصول له',
                        de: 'Continuous follow-up & support for one month with a clear weight goal',
                        p: 100000
                    },
                    {
                        a: 'جلسة كرايو ثيرابي للبطن',
                        e: 'Cryotherapy Session for Abdomen',
                        da: ' تقنية التجميد لحرق الدهون وشد الجسم، مدة الجلسة ساعة كل شهر واحتياج الشخص من 6-7 جلسات ',
                        de: 'Freeze technology for fat burning & body tightening sessions, 1 hour per month, 6-7 sessions required',
                        p: 250000
                    },
                    {
                        a: 'جلسة كرايو ثيرابي للفخذين',
                        e: 'Cryotherapy Session for Thighs',
                        da: ' تقنية التجميد لحرق الدهون وشد الجسم، يتم اختيار منطقة واحدة اما فخذين امامي او جانبي او خلفي، مدة الجلسة ساعة كل شهر واحتياج الشخص من 6-7 جلسات ',
                        de: 'Freeze technology for fat burning & body tightening sessions, one area at a time, front, back or side, 1 hour per month, 6-7 sessions required',
                        p: 300000
                    }, ,
                    {
                        a: 'جلسة كرايو ثيرابي للساعدين',
                        e: 'Cryotherapy Session for Arms',
                        da: ' تقنية التجميد لحرق الدهون وشد الجسم، مدة الجلسة ساعة كل شهر واحتياج الشخص من 6-7 جلسات ',
                        de: 'Freeze technology for fat burning & body tightening sessions, 1 hour per month, 6-7 sessions required',
                        p: 300000
                    }, ,
                    {
                        a: 'جلسة كرايو ثيرابي للذقن المزدوج (اللغلوغ)',
                        e: 'Cryotherapy Session for Double Chin',
                        da: ' تقنية التجميد لحرق الدهون وشد الجسم، مدة الجلسة ساعة كل شهر واحتياج الشخص من 6-7 جلسات ',
                        de: 'Freeze technology for fat burning & body tightening sessions,1 hour per month, 6-7 sessions required',
                        p: 150000
                    },
                    {
                        a: 'جلسة كافيتيشن',
                        e: 'Cavitation Session',
                        da: '"منطقة واحدة" تقنية الموجات فوق الصوتية لتفتيت الدهون وشد الجسم، مدة الجلسة 15 الى 20 دقيقة اسبوعيا واحتياج الشخص من 6-7 جلسات ',
                        de: 'Ultrasound technology for fat disruption & body tightening sessions, 15-20 minutes weekly, 6-7 sessions required',
                        p: 100000
                    },
                    {
                        a: 'جلسة RF للسيلوليت والترهلات',
                        e: 'RF Session for Cellulite and Loose Skin',
                        da: 'جلسة واحدة لتقنية الترددات الراديوية لعلاج السيلوليت وشد ترهلات الجسم، مدة الجلسة 15 الى 20 دقيقة اسبوعيا واحتياج الشخص من 6-10 جلسات ',
                        de: 'One session of radiofrequency technology for cellulite treatment & skin tightening, 15-20 minutes weekly, 6-10 sessions required',
                        p: 75000
                    },
                    {
                        a: 'جلسة RF للذقن المزدوج (اللغلوغ)',
                        e: 'RF Session for Double Chin',
                        da: 'جلسة واحدة لتقنية الترددات الراديوية لعلاج اللغلوغ، مدة الجلسة 10 الى 20 دقيقة اسبوعيا واحتياج الشخص من 6-10 جلسات ',
                        de: 'One session of radiofrequency technology for double chin treatment & skin tightening, 10-20 minutes weekly, 6-10 sessions required',
                        p: 75000
                    },
                    {
                        a: 'جلسة ليبوليزر',
                        e: 'Libolizer Session',
                        da: 'جلسة واحدة لتقنية الليبوليزر لتفتيت الدهون وشد الجسم، مدة الجلسة 20 الى 30 دقيقة اسبوعيا واحتياج الشخص من 6-10 جلسات ',
                        de: 'One session of ultrasound technology for fat disruption & body tightening, 20-30 minutes weekly, 6-10 sessions required',
                        p: 75000
                    },
                ]
            },
            {
                n: {
                    a: 'الليزر',
                    e: 'Laser'
                },
                ic: '',
                it: [{
                        a: 'ليزر كامل الوجه',
                        e: 'Full Face Laser',
                        da: 'إزالة شعر الوجه بالكامل بتقنية متطورة',
                        de: 'Complete facial hair removal with advanced tech',
                        p: 25000
                    },
                    {
                        a: 'الشفة العلوية',
                        e: 'Upper Lip',
                        da: 'إزالة شعر منطقة الشفة العلوية',
                        de: 'Upper lip hair removal',
                        p: 8000
                    },
                    {
                        a: 'ذراعان كاملتان',
                        e: 'Full Arms',
                        da: 'إزالة شعر الذراعين بالكامل',
                        de: 'Full arm hair removal',
                        p: 30000
                    },
                    {
                        a: 'ساقان كاملتان',
                        e: 'Full Legs',
                        da: 'إزالة شعر الساقين بالكامل',
                        de: 'Complete leg hair removal',
                        p: 45000
                    },
                    {
                        a: 'إبطان',
                        e: 'Underarms',
                        da: 'إزالة شعر منطقة الإبط',
                        de: 'Underarm hair removal',
                        p: 15000
                    },
                    {
                        a: 'منطقة البيكيني',
                        e: 'Bikini Line',
                        da: 'إزالة شعر منطقة البيكيني بأمان',
                        de: 'Safe & precise bikini line removal',
                        p: 20000
                    },
                    {
                        a: 'باقة كامل الجسم',
                        e: 'Full Body Package',
                        da: 'باقة شاملة لكامل الجسم بسعر مميز',
                        de: 'Comprehensive full-body laser at special price',
                        p: 150000
                    }
                ]
            },
            {
                n: {
                    a: 'الجلدية',
                    e: 'Dermatology'
                },
                ic: '',
                it: [{
                        a: 'استشارة جلدية',
                        e: 'Dermatology Consultation',
                        da: 'تشخيص دقيق من طبيبة متخصصة',
                        de: 'Accurate skin diagnosis by a specialist',
                        p: 15000
                    },
                    {
                        a: 'جلسة ميكرونيدلينج',
                        e: 'Microneedling Session',
                        da: 'تحفيز الكولاجين ونضارة البشرة',
                        de: 'Collagen stimulation & skin rejuvenation',
                        p: 50000
                    },
                    {
                        a: 'بيلينج كيميائي خفيف',
                        e: 'Light Chemical Peel',
                        da: 'تجديد البشرة وتوحيد لونها',
                        de: 'Skin renewal & tone evening treatment',
                        p: 30000
                    },
                    {
                        a: 'حقن البلازما PRP',
                        e: 'PRP Platelet Plasma',
                        da: 'تجديد خلايا البشرة بالبلازما الذاتية',
                        de: 'Skin cell renewal with autologous plasma',
                        p: 65000
                    },
                    {
                        a: 'جلسة علاج حب الشباب',
                        e: 'Acne Treatment',
                        da: 'بروتوكول علاجي متخصص للبشرة الدهنية',
                        de: 'Specialized protocol for oily & acne-prone skin',
                        p: 40000
                    }
                ]
            },
            {
                n: {
                    a: 'العناية بالبشرة',
                    e: 'Skincare'
                },
                ic: '',
                it: [{
                        a: 'تنظيف بشرة عادي (ألماسي)',
                        e: 'Classic Diamond Facial',
                        da: 'سكراب + غسول + هيدرافيشل + سيرومات + واقي',
                        de: 'Scrub + Wash + HydraFacial + Serums + Sunblock',
                        p: 150000
                    },
                    {
                        a: 'تنظيف بشرة عادي (مائي)',
                        e: 'Classic Water Facial',
                        da: 'سكراب + غسول + هيدرافيشل + سيرومات مغذية + واقي',
                        de: 'Scrub + Wash + HydraFacial + Nourishing Serums + Sunblock',
                        p: 175000
                    },
                    {
                        a: 'تنظيف بشرة عميق (ألماسي + مائي)',
                        e: 'Deep Diamond & Water Facial',
                        da: 'غسول + سكراب + سنارة + أحماض + هيدرافيشل + سيروم + واقي',
                        de: 'Wash + Scrub + Blackhead Tool + Acids + HydraFacial + Serum + Sunblock',
                        p: 200000
                    },
                    {
                        a: 'تنظيف بشرة ملكي',
                        e: 'Royal Facial',
                        da: 'تنظيف ملكي متكامل مع استخدام السنارة لإزالة الشوائب',
                        de: 'Comprehensive Royal facial with blackhead extraction tool',
                        p: 260000
                    },
                    {
                        a: 'تنظيف بشرة للعنق',
                        e: 'Neck Skin Cleansing',
                        da: 'تنظيف وترطيب مخصص لمنطقة الرقبة',
                        de: 'Specialized cleansing and hydration for the neck area',
                        p: 150000
                    },
                    {
                        a: 'تنظيف بشرة ظهر',
                        e: 'Back Skin Cleansing',
                        da: 'تنظيف عميق ومعالجة لبشرة الظهر',
                        de: 'Deep cleansing and treatment for the back area',
                        p: 150000
                    },
                    {
                        a: 'تنظيف بشرة وتفتيح وتقشير (كواع + ركب)',
                        e: 'Elbows & Knees Brightening',
                        da: ' تنظيف وتقشير وتفتيح لمنطقتي الكوع والركبة',
                        de: 'Cleansing, peeling, and brightening for elbows and knees',
                        p: 150000
                    },
                    {
                        a: 'تنظيف وتقشير وتنعيم كفين',
                        e: 'Hand Cleansing & Softening',
                        da: 'تنظيف وتقشير مخصص للكفين للحصول على ملمس ناعم',
                        de: 'Specialized peeling and softening treatment for hands',
                        p: 100000
                    }
                ]
            }
        ]
    },

    y: {
        name: {
            a: '',
            e: 'Your Gym'
        },
        cl: 'gy',
        ik: 'y',
        sec: [{
                n: {
                    a: 'الإيروبيك',
                    e: 'Aerobics'
                },
                ic: '',
                it: [{
                        a: 'فترة اولى صباحي',
                        e: 'Morning Session 1',
                        da: 'يوميا ما عدا الثلاثاء والجمعة من 9 صباحا الى 10:30 صباحا',
                        de: 'Daily but not Thursdays & Fridays from 9am to 10:30am',
                        p: 250000
                    },
                    {
                        a: 'فترة ثانية صباحي',
                        e: 'Morning Session 2',
                        da: 'يوميا ما عدا الثلاثاء والجمعة من 11:30 صباحا الى 1 ظهرا',
                        de: 'Daily but not Thursdays & Fridays from 11:30am to 1pm',
                        p: 250000
                    },
                    {
                        a: 'فترة اولى مسائي',
                        e: 'Evening Session 1',
                        da: 'يوميا ما عدا الثلاثاء والجمعة من 5:30 مساء الى 7 مساء',
                        de: 'Daily but not Thursdays & Fridays from 5:30pm to 7pm',
                        p: 250000
                    },
                    {
                        a: 'فترة ثانية مسائي',
                        e: 'Evening Session 2',
                        da: 'يوميا ما عدا الثلاثاء والجمعة من 6:30 مساء الى 8 مساء',
                        de: 'Daily but not Thursdays & Fridays from 6:30pm to 8pm',
                        p: 250000
                    }
                ]
            },



            {
                n: {
                    a: 'رقص شرقي',
                    e: 'Belly Dance'
                },
                ic: '',
                it: [{
                        a: 'فترة صباحية',
                        e: 'Morning Session',
                        da: 'سبت واثنين واربعاء من 10 صباحا الى 11:30 صباحا',
                        de: 'Saturday, Monday & Wednesday from 10am to 11:30am',
                        p: 250000
                    },
                    {
                        a: 'فترة مسائية',
                        e: 'Evening Session',
                        da: 'سبت واثنين واربعاء من 4 مساء الى 5:30 مساء',
                        de: 'Saturday, Monday & Wednesday from 4pm to 5:30pm',
                        p: 250000
                    }
                ]
            },



            {
                n: {
                    a: 'تدريب خاص',
                    e: 'Personal Training'
                },
                ic: '',
                it: [{
                        a: 'جلسة تدريب شخصي (رقص شرقي)',
                        e: 'Personal Training (Belly Dance)',
                        da: ' مع المدربة ملك وبرنامج مخصص مع حجز كامل للصالة وخصوصية تامة',
                        de: 'Training with Coach Malak & personalized program with full gym reservation & complete privacy',
                        p: "300$"
                    },
                    {
                        a: 'جلسة تدريب شخصي (زومبا)',
                        e: 'Personal Training (Zumba)',
                        da: ' مع المدربة غادة وبرنامج مخصص مع حجز كامل للصالة وخصوصية تامة',
                        de: 'Training with Coach Gada & personalized program with full gym reservation & complete privacy',
                        p: "300$"
                    }
                ]
            },
            {
                n: {
                    a: 'حديد',
                    e: 'Weight Training'
                },
                ic: '',
                it: [{
                        a: 'فترة صباحية',
                        e: 'Morning Session',
                        da: 'مع اشراف متخصص ساعة واحدة حسب وقت المتدربة المناسب من الساعة 10:30 صباحا الى 1 ظهرا',
                        de: 'One hour of supervision by a qualified trainer from 10:30am to 1pm',
                        p: 250000
                    },
                    {
                        a: 'فترة مسائية',
                        e: 'Evening Session',
                        da: 'مع اشراف متخصص ساعة واحدة حسب وقت المتدربة المناسب من الساعة 4:30 مساء الى 6 مساء',
                        de: 'One hour of supervision by a qualified trainer from 4:30pm to 6pm',
                        p: 250000
                    }
                ]
            },
            {
                n: {
                    a: 'منطقة كبار السن و الأطفال',
                    e: 'senior & Kids Area'
                },
                ic: '',
                it: [{
                        a: 'منطقة تمرينات الأطفال – شهري',
                        e: 'Kids Workout Area (Monthly)',
                        da: 'بيئة آمنة ومُشرفة للأطفال من سن الخامسة الى الخامسة عشر يوميا ما عدا ثلاثاء وجمعة من الساعة 1 ظهرا الى 2 ظهرا',
                        de: 'Healthy and supervised area for kids from 5th to 10th daily but not Thursdays & Fridays from 1pm to 2pm',
                        p: 200000
                    },
                    {
                        a: 'كبار السن – صباحي',
                        e: 'Senior – Morning',
                        da: 'احد وثلاثاء وخميس من الساعة 10 صباحا الى 11:30 صباحا مع مدربة متخصصة',
                        de: 'sunday, Tuesday & Thursday from 10am to 11:30am with a specialized trainer',
                        p: 300000
                    },
                    {
                        a: 'كبار السن – مسائي',
                        e: 'Senior – Evening',
                        da: 'احد وثلاثاء وخميس من الساعة 4 مساء الى 5:30 مساء مع مدربة متخصصة',
                        de: 'sunday, Tuesday & Thursday from 4pm to 5:30pm with a specialized trainer',
                        p: 300000
                    }
                ]
            }
        ]
    },

    n: {
        name: {
            a: 'نواعم بيوتي',
            e: 'Nawaem Beauty'
        },
        cl: 'nw',
        ik: 'n',
        sec: [{
                n: {
                    a: 'تصفيف الشعر',
                    e: 'Hair Styling'
                },
                ic: '',
                it: [{
                        a: 'قص وتشفير',
                        e: 'Haircut & Blow-dry',
                        da: 'قصة عصرية مع تشفير احترافي',
                        de: 'Trendy cut with professional blow-dry finish',
                        p: 15000
                    },
                    {
                        a: 'تشفير فقط',
                        e: 'Blow-dry Only',
                        da: 'تشفير وتصفيف الشعر فقط',
                        de: 'Professional blow-dry & styling only',
                        p: 8000
                    },
                    {
                        a: 'كيراتين',
                        e: 'Keratin Treatment',
                        da: 'علاج الكيراتين لشعر ناعم وحريري',
                        de: 'Keratin for smooth silky frizz-free hair',
                        p: 80000
                    },
                    {
                        a: 'صبغة كاملة',
                        e: 'Full Hair Color',
                        da: 'صبغة احترافية كاملة بأجود الألوان',
                        de: 'Professional full-color with premium dyes',
                        p: 50000
                    },
                    {
                        a: 'بالياج',
                        e: 'Balayage',
                        da: 'تقنية البالياج للتدرج الطبيعي',
                        de: 'Hand-painted highlights for natural-looking gradient',
                        p: 120000
                    },
                    {
                        a: 'أومبري',
                        e: 'Ombré',
                        da: 'تدرج لوني من الداكن للفاتح',
                        de: 'Gradient color from dark roots to lighter ends',
                        p: 100000
                    },
                    {
                        a: 'وصلات شعر طبيعية',
                        e: 'Hair Extensions',
                        da: 'وصلات طبيعية عالية الجودة',
                        de: 'Premium quality natural hair extensions',
                        p: 150000,
                        fr: true
                    },
                    {
                        a: 'ماسك علاجي عميق',
                        e: 'Deep Treatment Mask',
                        da: 'ماسك مكثف لترميم وتغذية الشعر',
                        de: 'Intensive mask to deeply repair & nourish hair',
                        p: 20000
                    }
                ]
            },
            {
                n: {
                    a: 'مكياج',
                    e: 'Makeup'
                },
                ic: '',
                it: [{
                        a: 'مكياج نهاري',
                        e: 'Daytime Makeup',
                        da: 'إطلالة ناعمة ومشرقة للنهار',
                        de: 'Soft & fresh natural daytime look',
                        p: 20000
                    },
                    {
                        a: 'مكياج سهرة',
                        e: 'Evening Makeup',
                        da: 'لوك سهرة جذاب ومميز',
                        de: 'Glamorous & striking evening look',
                        p: 35000
                    },
                    {
                        a: 'مكياج خطبة',
                        e: 'Engagement Makeup',
                        da: 'إطلالة ملكية ليوم الخطبة',
                        de: 'Regal look for your special engagement day',
                        p: 70000
                    },
                    {
                        a: 'مكياج عروسة',
                        e: 'Bridal Makeup',
                        da: 'مكياج عروس متكامل يدوم طوال اليوم',
                        de: 'Full long-lasting bridal makeup look',
                        p: 100000
                    },
                    {
                        a: 'تشكيل وصبغ الحاجبين',
                        e: 'Brow Shape & Tint',
                        da: 'رسم وصبغ الحاجبين للإطار المثالي',
                        de: 'Expert brow shaping & tinting for a perfect frame',
                        p: 10000
                    }
                ]
            },
            {
                n: {
                    a: 'أظافر وسبا',
                    e: 'Nails & Spa'
                },
                ic: '',
                it: [{
                        a: 'مانيكير',
                        e: 'Manicure',
                        da: 'عناية وتشكيل الأظافر وطلاء كلاسيكي',
                        de: 'Nail care, shaping & classic polish',
                        p: 12000
                    },
                    {
                        a: 'باديكير',
                        e: 'Pedicure',
                        da: 'عناية متكاملة بالقدمين والأظافر',
                        de: 'Complete foot & nail care treatment',
                        p: 15000
                    },
                    {
                        a: 'أظافر جيل',
                        e: 'Gel Nails',
                        da: 'طلاء جيل يدوم لأسابيع',
                        de: 'Long-lasting gel polish for weeks of wear',
                        p: 25000
                    },
                    {
                        a: 'نقش الأظافر (للظفر الواحد)',
                        e: 'Nail Art (per nail)',
                        da: 'تصاميم يدوية مبتكرة على الأظافر',
                        de: 'Creative hand-drawn nail art designs',
                        p: 2000
                    },
                    {
                        a: 'مساج كلاسيكي – 60 دقيقة',
                        e: 'Classic Massage (60 min)',
                        da: 'مساج استرخائي كامل للجسم',
                        de: 'Full-body relaxation massage session',
                        p: 35000
                    },
                    {
                        a: 'حمام وتقشير الجسم',
                        e: 'Hammam & Body Scrub',
                        da: 'تقشير وترطيب الجسم بالطريقة الشرقية',
                        de: 'Oriental-style body scrub & moisturizing',
                        p: 45000
                    },
                    {
                        a: 'باقة الاسترخاء الكاملة',
                        e: 'Full Relaxation Package',
                        da: 'مساج كامل + ماسك للبشرة في جلسة واحدة',
                        de: 'Full body massage + facial mask in one session',
                        p: 70000
                    }
                ]
            },
            {
                n: {
                    a: 'جناح العروسة',
                    e: 'Bridal Suite'
                },
                ic: '',
                it: [{
                        a: 'باقة عروسة شاملة',
                        e: 'Full Bridal Package',
                        da: 'شعر + مكياج + أظافر كاملة بيد خبيرات',
                        de: 'Hair + Makeup + Nails by our expert team',
                        p: 250000
                    },
                    {
                        a: 'حمام العروسة الملكي',
                        e: 'Royal Bridal Hammam',
                        da: 'تجربة استشفائية فاخرة قبل يوم الزفاف',
                        de: 'Luxurious spa ritual before the wedding day',
                        p: 80000
                    },
                    {
                        a: 'باقة ليلة الحناء',
                        e: 'Henna Night Package',
                        da: 'مكياج + حناء + تجهيز كامل للعروسة',
                        de: 'Makeup + henna + full bridal preparation',
                        p: 120000
                    },
                    {
                        a: 'فيشل إشراقة ما قبل الزفاف',
                        e: 'Pre-Wedding Glow Facial',
                        da: 'جلسة خاصة لإشراقة بشرة لا تُنسى',
                        de: 'Special facial for unforgettable bridal radiance',
                        p: 60000
                    }
                ]
            },
            {
                n: {
                    a: 'الفساتين',
                    e: 'Dresses'
                },
                ic: '',
                it: [{
                        a: 'تأجير فستان عروسة',
                        e: 'Bridal Dress Rental',
                        da: 'مجموعة فساتين عرائس فاخرة وعصرية',
                        de: 'Luxury & contemporary bridal dress collection',
                        p: 200000,
                        fr: true
                    },
                    {
                        a: 'تأجير فستان سهرة',
                        e: 'Evening Dress Rental',
                        da: 'تشكيلة واسعة من فساتين السهرة',
                        de: 'Wide selection of elegant evening gowns',
                        p: 80000,
                        fr: true
                    },
                    {
                        a: 'تأجير فستان خطوبة',
                        e: 'Engagement Dress Rental',
                        da: 'فساتين خطوبة مميزة لليلة لا تُنسى',
                        de: 'Distinctive gowns for an unforgettable engagement',
                        p: 100000,
                        fr: true
                    },
                    {
                        a: 'تعديل وتفصيل',
                        e: 'Alterations & Fitting',
                        da: 'خدمة تعديل الفساتين على المقاس بدقة',
                        de: 'Precise bespoke dress alteration & fitting service',
                        p: 15000,
                        fr: true
                    }
                ]
            }
        ]
    },

    c: {
        name: {
            a: 'ماي كافيه',
            e: 'My Cafe'
        },
        cl: 'cf',
        ik: 'c',
        sec: [{
                n: {
                    a: 'مشروبات ساخنة',
                    e: 'Hot Beverages'
                },
                ic: '',
                it: [{
                        a: 'هوت شوكلت',
                        e: 'Hot Chocolate',
                        da: 'شوكولاتة ساخنة غنية وكريمية المذاق',
                        de: 'Rich and creamy hot chocolate',
                        p: 12000
                    },
                    {
                        a: 'هوت لوتس',
                        e: 'Hot Lotus',
                        da: 'مشروب دافئ بنكهة بسكويت اللوتس الشهيرة',
                        de: 'Warm drink with the famous Lotus biscuit flavor',
                        p: 15000
                    },
                    {
                        a: 'هوت بستاشيو',
                        e: 'Hot Pistachio',
                        da: 'مزيج دافئ وفريد بنكهة الفستق الحلبي الغنية',
                        de: 'A unique warm blend with rich pistachio flavor',
                        p: 15000
                    },
                    {
                        a: 'هوت دارك شوكلت',
                        e: 'Hot Dark Chocolate',
                        da: 'شوكولاتة داكنة ساخنة لعشاق المذاق القوي والمر قليلاً',
                        de: 'Hot dark chocolate for those who love a strong, slightly bitter taste',
                        p: 15000
                    },
                    {
                        a: 'هوت وايت شوكلت',
                        e: 'Hot White Chocolate',
                        da: 'مشروب دافئ وحلو بمذاق الشوكولاتة البيضاء الناعمة',
                        de: 'Warm and sweet drink with smooth white chocolate flavor',
                        p: 15000
                    },
                    {
                        a: 'قرين تي',
                        e: 'Green Tea',
                        da: 'شاي أخضر طبيعي منعش ومفيد',
                        de: 'Natural, refreshing, and healthy green tea',
                        p: 7000
                    },
                    {
                        a: 'انجليش بريكفاست',
                        e: 'English Breakfast',
                        da: 'شاي أسود كلاسيكي فاخر مثالي لبداية اليوم',
                        de: 'Classic premium black tea, perfect for starting the day',
                        p: 7000
                    },
                    {
                        a: 'ماتشا تي لاتيه',
                        e: 'Matcha Tea Latte',
                        da: 'شاي الماتشا الياباني الفاخر مع الحليب الساخن',
                        de: 'Premium Japanese Matcha tea with steamed milk',
                        p: 15000
                    },
                    {
                        a: 'اسبريسو',
                        e: 'Espresso',
                        da: 'جرعة مركزة وقوية من القهوة الصافية',
                        de: 'A concentrated and strong shot of pure coffee',
                        p: 10000
                    },
                    {
                        a: 'لونجو',
                        e: 'Lungo',
                        da: 'اسبريسو مستخلص لفترة أطول لمذاق أخف وكمية أكثر',
                        de: 'Espresso extracted for longer for a milder taste and larger volume',
                        p: 10000
                    },
                    {
                        a: 'أمريكانو',
                        e: 'Americano',
                        da: 'اسبريسو مخفف بالماء الساخن للمذاق الكلاسيكي',
                        de: 'Espresso diluted with hot water for a classic taste',
                        p: 12000
                    },
                    {
                        a: 'كافيه لاتيه',
                        e: 'Caffè Latte',
                        da: 'اسبريسو مع كمية وافرة من الحليب الساخن ورغوة خفيفة',
                        de: 'Espresso with plenty of steamed milk and a light foam',
                        p: 15000
                    },
                    {
                        a: 'كابوتشينو',
                        e: 'Cappuccino',
                        da: 'توازن مثالي بين الاسبريسو والحليب ورغوة الحليب الكثيفة',
                        de: 'A perfect balance of espresso, milk, and thick milk foam',
                        p: 15000
                    },
                    {
                        a: 'كراميل ماكياتو',
                        e: 'Caramel Macchiato',
                        da: 'حليب ساخن بنكهة الفانيليا مع الاسبريسو ولمسة كراميل',
                        de: 'Steamed vanilla-flavored milk with espresso and a caramel drizzle',
                        p: 20000
                    },
                    {
                        a: 'سبانش لاتيه',
                        e: 'Spanish Latte',
                        da: 'لاتيه مميز يجمع بين الاسبريسو والحليب المكثف المحلى',
                        de: 'Distinctive latte combining espresso with sweetened condensed milk',
                        p: 20000
                    },
                    {
                        a: 'موكا كافيه',
                        e: 'Caffè Mocha',
                        da: 'مزيج رائع بين الاسبريسو والشوكولاتة والحليب الساخن',
                        de: 'A wonderful blend of espresso, chocolate, and steamed milk',
                        p: 20000
                    },
                    {
                        a: 'وايت موكا كافيه',
                        e: 'White Mocha Caffè',
                        da: 'اسبريسو مع الشوكولاتة البيضاء والحليب الساخن',
                        de: 'Espresso with white chocolate and steamed milk',
                        p: 20000
                    },
                    {
                        a: 'انجليش توفي نت',
                        e: 'English Toffee Nut',
                        da: 'قهوة دافئة بنكهة التوفي الإنجليزي والمكسرات',
                        de: 'Warm coffee with English toffee and nut flavors',
                        p: 20000
                    },
                    {
                        a: 'لاتيه بالبندق',
                        e: 'Hazelnut Latte',
                        da: 'كافيه لاتيه كلاسيكي مع نكهة البندق المحمص',
                        de: 'Classic caffè latte with roasted hazelnut flavor',
                        p: 20000
                    },
                    {
                        a: 'قهوة تركية',
                        e: 'Turkish Coffee',
                        da: 'قهوة محضرة على الطريقة التركية التقليدية الأصيلة',
                        de: 'Coffee prepared in the traditional authentic Turkish way',
                        p: 8000
                    },
                    {
                        a: 'سولتد كراميل لاتيه',
                        e: 'Salted Caramel Latte',
                        da: 'لاتيه بنكهة الكراميل المملح لمزيج بين الحلاوة والملوحة',
                        de: 'Latte with salted caramel flavor for a sweet and salty blend',
                        p: 20000
                    }
                ]
            },
            {
                n: {
                    a: 'قهوة باردة',
                    e: 'Cold Beverages'
                },
                ic: '',
                it: [{
                        a: 'اسبريسو فراب',
                        e: 'Espresso Frappé',
                        da: 'مزج غني من الاسبريسو والثلج المجروش',
                        de: 'A rich blend of espresso and crushed ice',
                        p: 20000
                    },
                    {
                        a: 'كراميل فراب لاتيه',
                        e: 'Caramel Frappé Latte',
                        da: 'فرابيه غني بنكهة الكراميل اللذيذة والنعومة',
                        de: 'Rich frappé with delicious and smooth caramel flavor',
                        p: 25000
                    },
                    {
                        a: 'سولتد كراميل فراب لاتيه',
                        e: 'Salted Caramel Frappé Latte',
                        da: 'مزيج مثالي بين حلاوة الكراميل ولمسة الملح المقرمشة',
                        de: 'A perfect blend of sweet caramel and a pinch of salt',
                        p: 25000
                    },
                    {
                        a: 'ايرش فراب لاتيه',
                        e: 'Irish Frappé Latte',
                        da: 'فرابيه مميز بنكهة القهوة الأيرلندية العريقة',
                        de: 'Distinctive frappé with traditional Irish coffee flavor',
                        p: 25000
                    },
                    {
                        a: 'موكا فراب',
                        e: 'Mocha Frappé',
                        da: 'مزيج مثلج ورائع من القهوة والشوكولاتة الغنية',
                        de: 'A wonderful iced blend of coffee and rich chocolate',
                        p: 25000
                    },
                    {
                        a: ' هايزلنوت فراب (بندق)',
                        e: 'Hazelnut Frappé',
                        da: 'فرابيه كريمي بنكهة البندق المحمص الغنية',
                        de: 'Creamy frappé with a rich roasted hazelnut flavor',
                        p: 25000
                    },
                    {
                        a: 'افتر ايت فراب',
                        e: 'After Eight Frappé',
                        da: 'مزيج منعش من الشوكولاتة الداكنة ونكهة النعناع الباردة',
                        de: 'Refreshing blend of dark chocolate and cool mint flavor',
                        p: 25000
                    },
                    {
                        a: 'ايس سبانش لاتيه',
                        e: 'Iced Spanish Latte',
                        da: 'لاتيه بارد مميز مع الحليب المكثف المحلى لمذاق غني',
                        de: 'Distinctive cold latte with sweetened condensed milk for a rich taste',
                        p: 25000
                    },
                    {
                        a: 'ايس كابتشينو',
                        e: 'Iced Cappuccino',
                        da: 'اسبريسو مع حليب بارد ورغوة حليب غنية ومثالية',
                        de: 'Espresso with cold milk and a rich, perfect milk foam',
                        p: 20000
                    },
                    {
                        a: 'ايس لاتيه',
                        e: 'Iced Latte',
                        da: 'لاتيه كلاسيكي متوازن طازج ومنعش على الثلج',
                        de: 'Balanced classic latte served fresh and refreshing over ice',
                        p: 20000
                    },
                    {
                        a: 'ايس امريكانو',
                        e: 'Iced Americano',
                        da: 'قهوة اسبريسو مركزة ومخففة بالماء البارد والثلج',
                        de: 'Concentrated espresso diluted with cold water and ice',
                        p: 15000
                    },
                    {
                        a: 'ايس موكا',
                        e: 'Iced Mocha',
                        da: 'إسبريسو مع الحليب البارد والشوكولاتة الفاخرة والثلج',
                        de: 'Espresso with cold milk, premium chocolate, and ice',
                        p: 20000
                    },
                    {
                        a: 'ايس وايت موكا',
                        e: 'Iced White Mocha',
                        da: 'مزيج رائع من الاسبريسو والشوكولاتة البيضاء والحليب البارد',
                        de: 'A delightful blend of espresso, white chocolate, and cold milk',
                        p: 20000
                    },
                    {
                        a: 'ايس شيكن اسبريسو',
                        e: 'Iced Shaken Espresso',
                        da: 'إسبريسو مخفوق مع الثلج بلمسة حلوة وحليب بارد',
                        de: 'Shaken espresso with ice, a sweet touch, and cold milk',
                        p: 20000
                    }
                ]
            },
            {
                n: {
                    a: 'سموذي وشيك',
                    e: 'Smoothies & Shakes'
                },
                ic: '',
                it: [{
                        a: 'موز حليب فريز',
                        e: 'Banana Milk Strawberry',
                        da: 'مزيج طازج ومغذي من الموز والحليب مع الفراولة الطبيعية',
                        de: 'A fresh and nutritious blend of banana and milk with natural strawberries',
                        p: 35000
                    },
                    {
                        a: 'موز حليب مانجو',
                        e: 'Banana Milk Mango',
                        da: 'عصير استوائي يجمع بين حلاوة الموز ونكهة المانجو الغنية',
                        de: 'A tropical smoothie combining banana sweetness with rich mango flavor',
                        p: 30000
                    },
                    {
                        a: 'موز حليب',
                        e: 'Banana Milk',
                        da: 'المشروب الكلاسيكي الصحي من الموز الطازج والحليب البارد',
                        de: 'The classic healthy drink made from fresh bananas and cold milk',
                        p: 25000
                    },
                    {
                        a: 'موز حليب كراميل',
                        e: 'Banana Milk Caramel',
                        da: 'موز وحليب مع لمسة غنية من صوص الكراميل المميز',
                        de: 'Banana and milk with a rich touch of signature caramel sauce',
                        p: 30000
                    },
                    {
                        a: 'موز حليب بستاشيو',
                        e: 'Banana Milk Pistachio',
                        da: 'مزيج فريد من الموز والحليب مع نكهة الفستق الحلبي الفاخرة',
                        de: 'A unique blend of banana and milk with premium pistachio flavor',
                        p: 30000
                    },
                    {
                        a: 'موز حليب نوتيلا',
                        e: 'Banana Milk Nutella',
                        da: 'مشروب طاقة لذيذ يجمع الموز والحليب مع شوكولاتة نوتيلا',
                        de: 'A delicious energy drink combining banana and milk with Nutella chocolate',
                        p: 30000
                    }
                ]
            },
            {
                n: {
                    a: 'ميلك شيك وكوكتيل',
                    e: 'Shakes & Cocktails'
                },
                ic: '',
                it: [{
                        a: 'ميلك شيك لوتس',
                        e: 'Lotus Milkshake',
                        da: 'ميلك شيك كريمي غني بقطع وزبدة بسكويت اللوتس المقرمشة',
                        de: 'Creamy milkshake rich with Lotus biscuit pieces and spread',
                        p: 30000
                    },
                    {
                        a: 'ميلك شيك بستاشيو',
                        e: 'Pistachio Milkshake',
                        da: 'مزيج فاخر من الحليب والآيس كريم مع نكهة الفستق الحلبي الغنية',
                        de: 'A luxurious blend of milk and ice cream with rich pistachio flavor',
                        p: 30000
                    },
                    {
                        a: 'ميلك شيك نوتيلا',
                        e: 'Nutella Milkshake',
                        da: 'ميلك شيك كلاسيكي لعشاق الشوكولاتة بنكهة النوتيلا الشهيرة',
                        de: 'Classic chocolate lover\'s milkshake with the famous Nutella flavor',
                        p: 30000
                    },
                    {
                        a: 'ميلك شيك اوريو',
                        e: 'Oreo Milkshake',
                        da: 'مزيج رائع من الحليب والآيس كريم مع قطع بسكويت الأوريو المطحونة',
                        de: 'A wonderful blend of milk and ice cream with crushed Oreo cookies',
                        p: 25000
                    },
                    {
                        a: 'ميلك شيك شيز كيك',
                        e: 'Cheesecake Milkshake',
                        da: 'تجربة فريدة تجمع بين طعم الشيز كيك الغني وبرودة الميلك شيك',
                        de: 'A unique experience combining rich cheesecake flavor with a cold milkshake',
                        p: 25000
                    }, {
                        a: 'فراولة فريش',
                        e: 'Fresh Strawberry',
                        da: 'عصير فراولة طبيعي وطازج مليء بالانتعاش',
                        de: 'Natural and fresh strawberry juice packed with freshness',
                        p: 25000
                    },
                    {
                        a: 'كوكتيل فواكه مشكلة',
                        e: 'Mixed Fruit Cocktail',
                        da: 'مزيج منعش من الفواكه الطبيعية المشكلة الطازجة',
                        de: 'A refreshing blend of fresh assorted natural fruits',
                        p: 30000
                    },
                    {
                        a: 'ليمون ونعناع',
                        e: 'Lemon Mint',
                        da: 'ليموناضة كلاسيكية مثلجة مع أوراق النعناع الطازجة',
                        de: 'Classic iced lemonade blended with fresh mint leaves',
                        p: 20000
                    },
                    {
                        a: 'مانجو سموذي',
                        e: 'Mango Smoothie',
                        da: 'سموذي مانجو طبيعي كثيف ومثلج ومنعش',
                        de: 'Thick, icy, and refreshing natural mango smoothie',
                        p: 20000
                    },
                    {
                        a: 'مانجو مع جوز الهند',
                        e: 'Mango with Coconut',
                        da: 'مزيج استوائي رائع من المانجو الطازج وحليب جوز الهند',
                        de: 'A wonderful tropical blend of fresh mango and coconut milk',
                        p: 20000
                    },
                    {
                        a: 'مانجو مع باشن فروت',
                        e: 'Mango with Passion Fruit',
                        da: 'مزيج حامض وحلو مميز من المانجو وثمار الباشن فروت',
                        de: 'A unique sweet and tangy blend of mango and passion fruit',
                        p: 20000
                    },
                ]
            }
        ]
    }
};

function fmt(n) {
    return n.toLocaleString('ar-EG')
}

function sL(l) {
    L = l;
    document.getElementById('bEN').classList.toggle('act', l === 'en');
    document.getElementById('bAR').classList.toggle('act', l === 'ar');
    document.getElementById('hsub').textContent = l === 'ar' ? 'انقر على قسم للاستكشاف' : 'Tap a department to explore';
    document.getElementById('shint').textContent = l === 'ar' ? 'انقر على قسم للاستكشاف' : 'Tap a card to explore';
    document.querySelectorAll('[data-a]').forEach(function (el) {
        el.textContent = l === 'ar' ? el.dataset.a : el.dataset.e
    });
    if (AD) {
        rT();
        rP();
        var d = D[AD];
        document.getElementById('dEN').textContent = d.name.e;
        document.getElementById('dAR').textContent = d.name.a
    }
}

function oD(k) {
    AD = k;
    AS = 0;
    var d = D[k],
        pg = document.getElementById('dp');
    pg.className = 'dp ' + d.cl;
    document.getElementById('dli').src = IM[d.ik];
    document.getElementById('dEN').textContent = d.name.e;
    document.getElementById('dAR').textContent = d.name.a;
    rT();
    rP();
    requestAnimationFrame(function () {
        pg.classList.add('open')
    });
    document.getElementById('pl').scrollTop = 0;
}

function cD() {
    var pg = document.getElementById('dp');
    pg.classList.remove('open');
    setTimeout(function () {
        AD = null
    }, 440);
}

function sw(i) {
    AS = i;
    rT();
    rP();
    document.getElementById('pl').scrollTop = 0
}

function rT() {
    var d = D[AD],
        st = document.getElementById('st');
    st.innerHTML = d.sec.map(function (s, i) {
        var cls = ['tb', L === 'ar' ? 'ara' : '', i === AS ? 'on' : ''].filter(Boolean).join(' ');
        return '<button class="' + cls + '" onclick="sw(' + i + ')">' + s.ic + ' ' + (L === 'ar' ? s.n.a : s.n.e) + '</button>';
    }).join('');
}

function rP() {
    var d = D[AD],
        sec = d.sec[AS],
        pl = document.getElementById('pl');
    var html = sec.it.map(function (it) {
        var ar = L === 'ar';
        var pc = 'pc' + (ar ? ' ar' : '');
        var pn = 'pn' + (ar ? ' ar' : '');
        var pd = 'pd' + (ar ? ' ar' : '');
        var nm = ar ? it.a : it.e;
        var ds = ar ? it.da : it.de;
        var fr = ar ? 'ابتداءً من' : 'From';
        return '<div class="' + pc + '"><div class="pcb"><div class="' + pn + '">' + nm + '</div><div class="' + pd + '">' + ds + '</div></div>' +
            '<div class="pt">' + (it.fr ? '<span class="pfr">' + fr + '</span>' : '') +
            '<span class="pam">' + fmt(it.p) + '</span>' +
            '<span class="pun">ل.س</span></div></div>';
    }).join('');
    pl.innerHTML = '<div class="fi">' + html + '</div>';
}
