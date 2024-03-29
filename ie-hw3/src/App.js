import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes , Route , useNavigate } from 'react-router-dom';

import List from './Components/List';

const DATA = [
  {
      "id": 1,
      "name": "Mohammad Esmaeili",
      "date": "2018-03-20",
      "title": "چاپ پوستر های با کیفیت دیواری به ابعاد دلخواه",
      "field": "عنوان",
      "old_value": "یدک کش جرثقیل امداد",
      "new_value": "تیگو 7 اکسلنت در حد صفر مدل 97"
  },
  {
      "id": 2,
      "name": "Ali Zamani",
      "date": "2018-09-18",
      "title": "ایفون 6s plus",
      "field": "قیمت",
      "old_value": 902385,
      "new_value": 1506113
  },
  {
      "id": 3,
      "name": "Amir Samiei",
      "date": "2018-10-20",
      "title": "لباس مجلسی و راحتی کودک تا دوسال",
      "field": "عنوان",
      "old_value": "کمد دوقلو و ویترین ( کتابخانه)",
      "new_value": "یک جفت خروس فولادی"
  },
  {
      "id": 4,
      "name": "Sadaf Hamidian",
      "date": "2019-09-13",
      "title": "بنایی‌.گچکاری.سرامیک‌کاشی",
      "field": "قیمت",
      "old_value": 997306,
      "new_value": 3892397
  },
  {
      "id": 5,
      "name": "Javad Zareie",
      "date": "2018-11-11",
      "title": "لباس مجلسی و راحتی کودک تا دوسال",
      "field": "قیمت",
      "old_value": 4785321,
      "new_value": 4001071
  },
  {
      "id": 6,
      "name": "Javad Mashhadi Zadeh",
      "date": "2019-12-27",
      "title": "پراید se مدل ۹۶",
      "field": "عنوان",
      "old_value": "کارشناسی اپتیما سراتو اسپورتیج، کارشناس انواع کیا",
      "new_value": "آپارتمان ۸۰ متری نوساز شهران شمالی"
  },
  {
      "id": 7,
      "name": "Sina Attaran",
      "date": "2019-10-28",
      "title": "s4 سالم",
      "field": "عنوان",
      "old_value": "پژو ٢٠٦ فرانسوى ٨١",
      "new_value": "100متری دنج عیان نشین"
  },
  {
      "id": 8,
      "name": "Ali Mashhadi Zadeh",
      "date": "2018-07-18",
      "title": "پژو206 تیپ 5 مدل96",
      "field": "قیمت",
      "old_value": 3191938,
      "new_value": 2224690
  },
  {
      "id": 9,
      "name": "Reza Rezaei",
      "date": "2018-08-11",
      "title": "کتونیzxفولوکس",
      "field": "عنوان",
      "old_value": "فروش انواع دستگاه گلمیخ زن استاد ولدینگ",
      "new_value": "صفر کیلومتر jac s5 جک اس فایو مدل ۹۷"
  },
  {
      "id": 10,
      "name": "Arash Moadab",
      "date": "2018-12-25",
      "title": "تخت کمجا تاشو",
      "field": "قیمت",
      "old_value": 4451775,
      "new_value": 3276701
  },
  {
      "id": 11,
      "name": "Armin Khadem",
      "date": "2019-04-11",
      "title": "لوله بازکنی تخلیه چاه سراسر تهران شبانه روزی",
      "field": "قیمت",
      "old_value": 662305,
      "new_value": 1184070
  },
  {
      "id": 12,
      "name": "Alireza Attaran",
      "date": "2019-05-09",
      "title": "فیگور اورجینال گوروت",
      "field": "عنوان",
      "old_value": "پراید ۱۳۱ مدل ۹۳",
      "new_value": "تلویزیون 32 اینچ سامسونگ"
  },
  {
      "id": 13,
      "name": "Narges Roudgar",
      "date": "2019-04-05",
      "title": "حواله ۲۰۶ تیپ ۵",
      "field": "قیمت",
      "old_value": 61310,
      "new_value": 3381362
  },
  {
      "id": 14,
      "name": "Ali Zamani",
      "date": "2019-06-08",
      "title": "لنت هیوندای و کیا",
      "field": "عنوان",
      "old_value": "کیسه بوکس",
      "new_value": "جلو پنجره پیکان"
  },
  {
      "id": 15,
      "name": "Hanieh Abbasi",
      "date": "2019-01-18",
      "title": "پراید ۱۳۱ مدل ۹۳",
      "field": "عنوان",
      "old_value": "توسان ۲۰۰۸فول شرکتی",
      "new_value": "پراید sxو کم کار"
  },
  {
      "id": 16,
      "name": "Saeedeh Dehghani",
      "date": "2018-04-18",
      "title": "پژو پارس ۹۱",
      "field": "عنوان",
      "old_value": "صفر کیلومتر jac s5 جک اس فایو مدل ۹۷",
      "new_value": "حواله ۲۰۶ تیپ ۵"
  },
  {
      "id": 17,
      "name": "Hamid Zareie",
      "date": "2019-02-20",
      "title": "سیخ کباب",
      "field": "قیمت",
      "old_value": 2368283,
      "new_value": 2584246
  },
  {
      "id": 18,
      "name": "Hamid Roudgar",
      "date": "2019-04-23",
      "title": "ps4_2018 slim 1tb",
      "field": "قیمت",
      "old_value": 2119900,
      "new_value": 1599448
  },
  {
      "id": 19,
      "name": "Hanieh Azangou",
      "date": "2018-10-20",
      "title": "پراید ۱۳۱ مدل ۹۳",
      "field": "قیمت",
      "old_value": 1952633,
      "new_value": 4458545
  },
  {
      "id": 20,
      "name": "Danial Moadab",
      "date": "2018-03-27",
      "title": "206 SD V8 FULL",
      "field": "قیمت",
      "old_value": 2086290,
      "new_value": 2640595
  },
  {
      "id": 21,
      "name": "Mohammad Abbasi",
      "date": "2020-01-22",
      "title": "100متری دنج عیان نشین",
      "field": "قیمت",
      "old_value": 1664193,
      "new_value": 709426
  },
  {
      "id": 22,
      "name": "Arash Fakharian",
      "date": "2020-01-02",
      "title": "فروش انواع دستگاه گلمیخ زن استاد ولدینگ",
      "field": "قیمت",
      "old_value": 195892,
      "new_value": 3196052
  },
  {
      "id": 23,
      "name": "Ali Dehghani",
      "date": "2018-09-17",
      "title": "تخت کمجا تاشو",
      "field": "عنوان",
      "old_value": "کمد دوقلو و ویترین ( کتابخانه)",
      "new_value": "فروش سواری"
  },
  {
      "id": 24,
      "name": "Sajjad Sadati",
      "date": "2018-10-21",
      "title": "تلوزیون ۵۵ال ای دی led سامسونگ",
      "field": "عنوان",
      "old_value": "تبلیغات تخصصی در فضای مجازی",
      "new_value": "کاپشن مردانه"
  },
  {
      "id": 25,
      "name": "Puran Erfani",
      "date": "2019-02-19",
      "title": "مکانیک سیار باطری سازی سیار امداد خودروتمام نقاط",
      "field": "عنوان",
      "old_value": "تلویزیون 32 اینچ سامسونگ",
      "new_value": "تبلیغات تخصصی در فضای مجازی"
  },
  {
      "id": 26,
      "name": "Afshin Ahmadi",
      "date": "2019-07-29",
      "title": "کاپشن مردانه",
      "field": "قیمت",
      "old_value": 846688,
      "new_value": 4677622
  },
  {
      "id": 27,
      "name": "Puran Taghavi",
      "date": "2019-07-20",
      "title": "تلویزیون 32 اینچ سامسونگ",
      "field": "عنوان",
      "old_value": "پراید se مدل ۹۶",
      "new_value": "فروش انواع دستگاه گلمیخ زن استاد ولدینگ"
  },
  {
      "id": 28,
      "name": "Anahita Samiei",
      "date": "2018-11-11",
      "title": "توسان ۲۰۰۸فول شرکتی",
      "field": "قیمت",
      "old_value": 4253106,
      "new_value": 1344601
  },
  {
      "id": 29,
      "name": "Alireza Hamidian",
      "date": "2019-09-05",
      "title": "اندروید پلیر در حد نو",
      "field": "قیمت",
      "old_value": 4806810,
      "new_value": 2035706
  },
  {
      "id": 30,
      "name": "Sajjad Attaran",
      "date": "2018-08-31",
      "title": "رم 1 Gig آکبند - فلش مموری 8 Gig - کیبورد آک",
      "field": "عنوان",
      "old_value": "شومیز/شورتک/دامن/مانتو/تونیک",
      "new_value": "کلیدسازی ((شبانه روزی))"
  },
  {
      "id": 31,
      "name": "Arash Sadati",
      "date": "2018-04-29",
      "title": "گوشی j2",
      "field": "عنوان",
      "old_value": "ایفون 6 LLA",
      "new_value": "کلیدسازی ((شبانه روزی))"
  },
  {
      "id": 32,
      "name": "Nazanin Abbasi",
      "date": "2018-03-15",
      "title": "استخدام منشی و مسئول دفتر",
      "field": "قیمت",
      "old_value": 3613665,
      "new_value": 3741588
  },
  {
      "id": 33,
      "name": "Abbas Taghavi",
      "date": "2018-06-14",
      "title": "۲۰۶ تیپ ۲ بیرنگ",
      "field": "قیمت",
      "old_value": 1697373,
      "new_value": 2025864
  },
  {
      "id": 34,
      "name": "Danial Ahmadi",
      "date": "2018-07-22",
      "title": "مکانیک سیار باطری سازی سیار امداد خودروتمام نقاط",
      "field": "عنوان",
      "old_value": "کارشناسی اپتیما سراتو اسپورتیج، کارشناس انواع کیا",
      "new_value": "خاهان mi note3"
  },
  {
      "id": 35,
      "name": "Danial Abbasi",
      "date": "2018-11-15",
      "title": "لباس مجلسی و راحتی کودک تا دوسال",
      "field": "عنوان",
      "old_value": "s4 سالم",
      "new_value": "تخت کودک گهواره ای همراه تشک رویال در حدنو"
  },
  {
      "id": 36,
      "name": "Nazanin Samiei",
      "date": "2019-10-28",
      "title": "لوله بازکنی تخلیه چاه سراسر تهران شبانه روزی",
      "field": "عنوان",
      "old_value": "پراید sxو کم کار",
      "new_value": "پیکاپ تمیز مدل۸۲"
  },
  {
      "id": 37,
      "name": "Hamid Zareie",
      "date": "2019-08-22",
      "title": "شومیز/شورتک/دامن/مانتو/تونیک",
      "field": "عنوان",
      "old_value": "فیگور اورجینال گوروت",
      "new_value": "تیگو 7 اکسلنت در حد صفر مدل 97"
  },
  {
      "id": 38,
      "name": "Danial Naghavi",
      "date": "2018-05-11",
      "title": "کتابخانه در حد واقعا نو",
      "field": "عنوان",
      "old_value": "کارشناس و کارشناسی تخصصی مزدا نیو مزدا ۳ و ۳۲۳",
      "new_value": "کلیدسازی ((شبانه روزی))"
  },
  {
      "id": 39,
      "name": "Maryam Naghavi",
      "date": "2018-05-18",
      "title": "گوشی j2",
      "field": "قیمت",
      "old_value": 2579107,
      "new_value": 4225425
  },
  {
      "id": 40,
      "name": "Saeedeh Asghar Zadeh",
      "date": "2019-08-18",
      "title": "2 عدد گوشی",
      "field": "عنوان",
      "old_value": "طراحی کابینت آشپزخانه و دکوراسیون داخلی",
      "new_value": "اسپیکر مانیتورینگ ۸ اینچ"
  },
  {
      "id": 41,
      "name": "Hanieh Hamidian",
      "date": "2019-04-08",
      "title": "آموزش رنگ و لایت",
      "field": "قیمت",
      "old_value": 4870323,
      "new_value": 3626864
  },
  {
      "id": 42,
      "name": "Ahmad Mohammadi",
      "date": "2018-07-07",
      "title": "پیکاپ تمیز مدل۸۲",
      "field": "قیمت",
      "old_value": 1630499,
      "new_value": 3669104
  },
  {
      "id": 43,
      "name": "Abbas Moadab",
      "date": "2019-06-15",
      "title": "لنت هیوندای و کیا",
      "field": "عنوان",
      "old_value": "اجرای نرده وحفاظ استیل",
      "new_value": "کتابخانه در حد واقعا نو"
  },
  {
      "id": 44,
      "name": "Sadaf Taghavi",
      "date": "2018-04-07",
      "title": "کمد دوقلو و ویترین ( کتابخانه)",
      "field": "عنوان",
      "old_value": "پیکاپ تمیز مدل۸۲",
      "new_value": "سیخ کباب"
  },
  {
      "id": 45,
      "name": "Sadaf Asghar Zadeh",
      "date": "2020-01-05",
      "title": "تیگو 7 اکسلنت در حد صفر مدل 97",
      "field": "قیمت",
      "old_value": 2153477,
      "new_value": 576532
  },
  {
      "id": 46,
      "name": "Pedram Dehghani",
      "date": "2018-11-24",
      "title": "خرید و فروش:زعفران.ادویه.خشکبار.پسته",
      "field": "عنوان",
      "old_value": "تعمیرات تخصصی دستگاههای اسپرسو ساز صنعتی و آسیاب",
      "new_value": "ساعت پلیس اورجینال سالم باجعبه اصلی"
  },
  {
      "id": 47,
      "name": "Puran Zamani",
      "date": "2019-12-22",
      "title": "ساعت پلیس اورجینال سالم باجعبه اصلی",
      "field": "عنوان",
      "old_value": "ساخت تابلو ال ای دی ثابت کلیه مناطق تهران",
      "new_value": "پراید ۱۳۱ مدل ۹۳"
  },
  {
      "id": 48,
      "name": "Sina Roudgar",
      "date": "2019-04-09",
      "title": "پیکاپ تمیز مدل۸۲",
      "field": "قیمت",
      "old_value": 3059854,
      "new_value": 3999642
  },
  {
      "id": 49,
      "name": "Alireza Sadati",
      "date": "2018-06-22",
      "title": "2 عدد گوشی",
      "field": "قیمت",
      "old_value": 4096853,
      "new_value": 4439939
  },
  {
      "id": 50,
      "name": "Gholam Roudgar",
      "date": "2019-12-01",
      "title": "تلوزیون ۵۵ال ای دی led سامسونگ",
      "field": "قیمت",
      "old_value": 2581799,
      "new_value": 2101878
  },
  {
      "id": 51,
      "name": "Arash Taghavi",
      "date": "2019-08-15",
      "title": "کمد دوقلو و ویترین ( کتابخانه)",
      "field": "قیمت",
      "old_value": 4224158,
      "new_value": 1795506
  },
  {
      "id": 52,
      "name": "Hamed Zareie",
      "date": "2018-05-28",
      "title": "جک S5 اتومات",
      "field": "قیمت",
      "old_value": 3910346,
      "new_value": 59789
  },
  {
      "id": 53,
      "name": "Armin Ahmadi",
      "date": "2020-01-02",
      "title": "خاهان mi note3",
      "field": "قیمت",
      "old_value": 1342570,
      "new_value": 2421293
  },
  {
      "id": 54,
      "name": "Sajjad Fakharian",
      "date": "2018-02-20",
      "title": "عروسک پولیشی",
      "field": "قیمت",
      "old_value": 892487,
      "new_value": 2658292
  },
  {
      "id": 55,
      "name": "Puran Dehghani",
      "date": "2018-02-28",
      "title": "پراید se مدل ۹۶",
      "field": "قیمت",
      "old_value": 858345,
      "new_value": 2424633
  },
  {
      "id": 56,
      "name": "Afshin Mohammadi",
      "date": "2018-12-20",
      "title": "a50 رام ۴ نونو با گارانتی",
      "field": "قیمت",
      "old_value": 1880127,
      "new_value": 606842
  },
  {
      "id": 57,
      "name": "Hanieh Esmaeili",
      "date": "2018-07-06",
      "title": "صفر کیلومتر jac s5 جک اس فایو مدل ۹۷",
      "field": "عنوان",
      "old_value": "سیخ کباب",
      "new_value": "شومیز/شورتک/دامن/مانتو/تونیک"
  },
  {
      "id": 58,
      "name": "Arash Rezaei",
      "date": "2019-04-07",
      "title": "ایفون 6s plus",
      "field": "قیمت",
      "old_value": 4503990,
      "new_value": 4217724
  },
  {
      "id": 59,
      "name": "Sajjad Sadati",
      "date": "2019-06-10",
      "title": "توسان ۲۰۰۸فول شرکتی",
      "field": "عنوان",
      "old_value": "وانت 87دوگانه سالم",
      "new_value": "کاپشن مردانه"
  },
  {
      "id": 60,
      "name": "Arash Dehghani",
      "date": "2019-10-25",
      "title": "ساخت تابلو ال ای دی ثابت کلیه مناطق تهران",
      "field": "قیمت",
      "old_value": 4001199,
      "new_value": 4406296
  },
  {
      "id": 61,
      "name": "Fatemeh Mashhadi Zadeh",
      "date": "2018-03-23",
      "title": "تبلیغات تخصصی در فضای مجازی",
      "field": "عنوان",
      "old_value": "ایفون 6s plus",
      "new_value": "کتونیzxفولوکس"
  },
  {
      "id": 62,
      "name": "Danial Attaran",
      "date": "2018-08-27",
      "title": "اسپیکر مانیتورینگ ۸ اینچ",
      "field": "قیمت",
      "old_value": 4407505,
      "new_value": 3062235
  },
  {
      "id": 63,
      "name": "Sadaf Moadab",
      "date": "2019-08-22",
      "title": "فولکس گل آخر 84",
      "field": "قیمت",
      "old_value": 2020797,
      "new_value": 1070262
  },
  {
      "id": 64,
      "name": "Afshin Sadati",
      "date": "2019-01-23",
      "title": "فروش انواع دستگاه گلمیخ زن استاد ولدینگ",
      "field": "عنوان",
      "old_value": "کلیدسازی ((شبانه روزی))",
      "new_value": "اسپیکر مانیتورینگ ۸ اینچ"
  },
  {
      "id": 65,
      "name": "Peyman Moadab",
      "date": "2018-04-23",
      "title": "کتونیzxفولوکس",
      "field": "عنوان",
      "old_value": "جک S5 اتومات",
      "new_value": "تلوزیون ۵۵ال ای دی led سامسونگ"
  },
  {
      "id": 66,
      "name": "Narges Erfani",
      "date": "2018-12-21",
      "title": "فروش سواری",
      "field": "عنوان",
      "old_value": "تخت کمجا تاشو",
      "new_value": "حمل بار با وانت پیکان24ساعته حتی تعطیلات شهرستانها"
  },
  {
      "id": 67,
      "name": "Asghar Roudgar",
      "date": "2019-07-18",
      "title": "ساعت پلیس اورجینال سالم باجعبه اصلی",
      "field": "عنوان",
      "old_value": "اندروید پلیر در حد نو",
      "new_value": "تیگو 7 اکسلنت در حد صفر مدل 97"
  },
  {
      "id": 68,
      "name": "Sajjad Mohammadi",
      "date": "2019-02-04",
      "title": "پژو206 تیپ 5 مدل96",
      "field": "عنوان",
      "old_value": "حمل بار با وانت پیکان24ساعته حتی تعطیلات شهرستانها",
      "new_value": "۸عدد بازی ps4 بصورت یکجا و یا انتخابی"
  },
  {
      "id": 69,
      "name": "Narges Sadati",
      "date": "2019-12-15",
      "title": "۱۲ دیسک + فن ۵ تایی + داک شارژ و... Ps4 Pro",
      "field": "عنوان",
      "old_value": "لوله کشی آب شوفاژ فاضلاب تعمیر پکیج و آبگرمکن",
      "new_value": "مگان اتوماتیک مدل ۹۰"
  },
  {
      "id": 70,
      "name": "Asghar Sadati",
      "date": "2019-03-22",
      "title": "مکانیک سیار باطری سازی سیار امداد خودروتمام نقاط",
      "field": "عنوان",
      "old_value": "گوشی j2",
      "new_value": "خودرو پراید ۱۱۱ مدل ۱۳۹۱"
  },
  {
      "id": 71,
      "name": "Danial Dehghani",
      "date": "2018-08-02",
      "title": "اجرای نرده وحفاظ استیل",
      "field": "عنوان",
      "old_value": "تخت کودک گهواره ای همراه تشک رویال در حدنو",
      "new_value": "کاپشن مردانه"
  },
  {
      "id": 72,
      "name": "Jafar Naghavi",
      "date": "2018-08-22",
      "title": "لپ تاپ دل سالم",
      "field": "عنوان",
      "old_value": "تلویزیون 32 اینچ سامسونگ",
      "new_value": "فولکس گل آخر 84"
  },
  {
      "id": 73,
      "name": "Ahmad Esmaeili",
      "date": "2019-06-17",
      "title": "پراید sxو کم کار",
      "field": "عنوان",
      "old_value": "100متری دنج عیان نشین",
      "new_value": "گوشی j2"
  },
  {
      "id": 74,
      "name": "Ahmad Mohammadi",
      "date": "2019-03-05",
      "title": "وانت 87دوگانه سالم",
      "field": "قیمت",
      "old_value": 4149114,
      "new_value": 4293385
  },
  {
      "id": 75,
      "name": "Abbas Zareie",
      "date": "2019-06-15",
      "title": "ایفون 6 LLA",
      "field": "قیمت",
      "old_value": 600751,
      "new_value": 2292894
  },
  {
      "id": 76,
      "name": "Armin Moadab",
      "date": "2018-10-20",
      "title": "۱۲ دیسک + فن ۵ تایی + داک شارژ و... Ps4 Pro",
      "field": "عنوان",
      "old_value": "لوله چاه بازکنی+لوله کشی نشت یابی+رفع نم چکه+بنایی",
      "new_value": "ساعت پلیس اورجینال سالم باجعبه اصلی"
  },
  {
      "id": 77,
      "name": "Saeedeh Sadati",
      "date": "2019-04-19",
      "title": "پراید ۱۱۱ تعمیر موتور اساسی و گیربکس نو",
      "field": "عنوان",
      "old_value": "ایکس باکس ۳۶۰ سوپر اسلیم ۲۵۰گیگ",
      "new_value": "رم 1 Gig آکبند - فلش مموری 8 Gig - کیبورد آک"
  },
  {
      "id": 78,
      "name": "Mohammad Hakimi",
      "date": "2019-02-19",
      "title": "s4 سالم",
      "field": "قیمت",
      "old_value": 4468378,
      "new_value": 2906047
  },
  {
      "id": 79,
      "name": "Maryam Hakimi",
      "date": "2019-11-14",
      "title": "گوشی j2",
      "field": "عنوان",
      "old_value": "ps4_2018 slim 1tb",
      "new_value": "کلیدسازی ((شبانه روزی))"
  },
  {
      "id": 80,
      "name": "Anahita Mashhadi Zadeh",
      "date": "2018-12-25",
      "title": "a50 رام ۴ نونو با گارانتی",
      "field": "قیمت",
      "old_value": 1035985,
      "new_value": 2415203
  },
  {
      "id": 81,
      "name": "Tina Erfani",
      "date": "2018-08-04",
      "title": "شومیز/شورتک/دامن/مانتو/تونیک",
      "field": "عنوان",
      "old_value": "آموزش رنگ و لایت",
      "new_value": "تلویزیون 32 اینچ سامسونگ"
  },
  {
      "id": 82,
      "name": "Sina Ahmadi",
      "date": "2019-01-24",
      "title": "فولکس گل آخر 84",
      "field": "عنوان",
      "old_value": "a50 رام ۴ نونو با گارانتی",
      "new_value": "آتکو /آکسور /اکتروس"
  },
  {
      "id": 83,
      "name": "Nazanin Erfani",
      "date": "2019-12-11",
      "title": "ال سی دی و قطعات آیفون ۵",
      "field": "عنوان",
      "old_value": "فیگور اورجینال گوروت",
      "new_value": "پژو پارس ۹۱"
  },
  {
      "id": 84,
      "name": "Amir Mohammadi",
      "date": "2018-12-02",
      "title": "کامپیوتر خانگیddr2 + مانیتور ال سی دی۱۹",
      "field": "قیمت",
      "old_value": 4356817,
      "new_value": 2919690
  },
  {
      "id": 85,
      "name": "Tina Dehghani",
      "date": "2019-11-07",
      "title": "لوله بازکنی تخلیه چاه سراسر تهران شبانه روزی",
      "field": "قیمت",
      "old_value": 4987153,
      "new_value": 4427146
  },
  {
      "id": 86,
      "name": "Peyman Khadem",
      "date": "2019-02-14",
      "title": "خاهان mi note3",
      "field": "عنوان",
      "old_value": "عروسک پولیشی",
      "new_value": "پراید se مدل ۹۶"
  },
  {
      "id": 87,
      "name": "Sina Abbasi",
      "date": "2018-07-05",
      "title": "کمد دوقلو و ویترین ( کتابخانه)",
      "field": "عنوان",
      "old_value": "پراید ۱۱۱ تعمیر موتور اساسی و گیربکس نو",
      "new_value": "لنت هیوندای و کیا"
  },
  {
      "id": 88,
      "name": "Sina Mohammadi",
      "date": "2019-06-18",
      "title": "جلو پنجره پیکان",
      "field": "قیمت",
      "old_value": 3536725,
      "new_value": 740699
  },
  {
      "id": 89,
      "name": "Sina Samiei",
      "date": "2018-05-31",
      "title": "رم 1 Gig آکبند - فلش مموری 8 Gig - کیبورد آک",
      "field": "قیمت",
      "old_value": 68256,
      "new_value": 4169406
  },
  {
      "id": 90,
      "name": "Maryam Erfani",
      "date": "2020-01-27",
      "title": "استخدام منشی و مسئول دفتر",
      "field": "قیمت",
      "old_value": 2231434,
      "new_value": 409116
  },
  {
      "id": 91,
      "name": "Javad Roudgar",
      "date": "2019-07-18",
      "title": "کیا ریو اتومات سرحال مدل 88 تمیز بدون رنگ",
      "field": "قیمت",
      "old_value": 4236090,
      "new_value": 1375053
  },
  {
      "id": 92,
      "name": "Asghar Azangou",
      "date": "2018-08-13",
      "title": "پراید se مدل ۹۶",
      "field": "عنوان",
      "old_value": "اندروید پلیر در حد نو",
      "new_value": "چاپ پوستر های با کیفیت دیواری به ابعاد دلخواه"
  },
  {
      "id": 93,
      "name": "Gholam Taghavi",
      "date": "2020-01-21",
      "title": "شومیز/شورتک/دامن/مانتو/تونیک",
      "field": "عنوان",
      "old_value": "خاهان mi note3",
      "new_value": "کلیدسازی ((شبانه روزی))"
  },
  {
      "id": 94,
      "name": "Asghar Hakimi",
      "date": "2018-07-16",
      "title": "طراحی کابینت آشپزخانه و دکوراسیون داخلی",
      "field": "عنوان",
      "old_value": "رم 1 Gig آکبند - فلش مموری 8 Gig - کیبورد آک",
      "new_value": "ایفون 6 LLA"
  },
  {
      "id": 95,
      "name": "Javad Dehghani",
      "date": "2019-02-25",
      "title": "تعمیرات تخصصی دستگاههای اسپرسو ساز صنعتی و آسیاب",
      "field": "قیمت",
      "old_value": 3859351,
      "new_value": 919524
  },
  {
      "id": 96,
      "name": "Ali Dehghani",
      "date": "2018-10-24",
      "title": "100متری دنج عیان نشین",
      "field": "قیمت",
      "old_value": 2311212,
      "new_value": 3663949
  },
  {
      "id": 97,
      "name": "Jafar Zareie",
      "date": "2019-04-15",
      "title": "کلیدسازی ((شبانه روزی))",
      "field": "قیمت",
      "old_value": 1809203,
      "new_value": 1519272
  },
  {
      "id": 98,
      "name": "Pedram Rezaei",
      "date": "2018-04-12",
      "title": "اسپیکر مانیتورینگ ۸ اینچ",
      "field": "عنوان",
      "old_value": "اپاچی180درحدصفر",
      "new_value": "باربری شهرری دولت آباد کیانشهر خزانه جوادیه وغیره"
  },
  {
      "id": 99,
      "name": "Hanieh Mohammadi",
      "date": "2018-05-20",
      "title": "آموزش رنگ و لایت",
      "field": "عنوان",
      "old_value": "فروش انواع دستگاه گلمیخ زن استاد ولدینگ",
      "new_value": "فروش انواع دستگاه گلمیخ زن استاد ولدینگ"
  },
  {
      "id": 100,
      "name": "Asghar Abbasi",
      "date": "2018-03-13",
      "title": "اپاچی180درحدصفر",
      "field": "عنوان",
      "old_value": "پژو ٢٠٦ فرانسوى ٨١",
      "new_value": "جی ۷ پرو ۳۲ گیگ j7 pro 32 gig"
  }];
function App() {
    const [filters, setFilters] = useState({
      field: '',
      ad: '',
      date: '',
      changer: '',
      isFavorite: false
    });
    const [filteredData, setFilteredData] = useState(DATA);
    const handleSearch = () => {
      const newFilteredData = DATA.filter(d => {
        const isFieldMatch = filters.field !== '' ? d.field === filters.field : true;
        const isAdMatch = filters.ad !== '' ? d.title.includes(filters.ad) : true;
        const isDateMatch = filters.date !== '' ? d.date === filters.date : true;
        const isChangerMatch = filters.changer !== '' ? d.name === filters.changer : true;
  
        return isFieldMatch && isAdMatch && isDateMatch && isChangerMatch;
      });
    
      
      setFilteredData(newFilteredData);
      setTotalPages(Math.ceil(newFilteredData.length / 20));
      setCurrentPage(1);
     
    };

    const getFavoriteRows = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      return DATA.filter(item => favorites.includes(item.id));
    };
  
    const favoriteRows = getFavoriteRows();
    
    const [currentPage, setCurrentPage] = useState(1);
    
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
      const data = filteredData;
      setTotalPages(Math.ceil(data.length / 20));
      setCurrentPage(1);
  
    }, [filters]);
  
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1); 
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    
    const start = (currentPage - 1) * 20;
    const end = start + 20;
    const paginatedData = filteredData.slice(start, end);
   
    console.log(totalPages);
       
    return (
      <div className="App">
       
        <div className='head'>
          <table>
            <thead>
              <tr>
                <th>فیلد</th>
                <th>نام آگهی</th>
                <th>تاریخ</th>
                <th>نام تغییر دهنده</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    className='inp'
                    id='inp1'
                    value={filters.field}
                    onChange={(e) => setFilters({ ...filters, field: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    className='inp'
                    id='inp2'
                    value={filters.ad}
                    onChange={(e) => setFilters({ ...filters, ad: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    className='inp'
                    id='inp3'
                    value={filters.date}
                    onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    className='inp'
                    id='inp4'
                    value={filters.changer}
                    onChange={(e) => setFilters({ ...filters, changer: e.target.value })}
                  />
                </td>
                <td>
                  <button onClick={handleSearch}>
                    Filter
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <table>
          <List items={paginatedData}  />
        </table>
        <div>
          <button onClick={handlePrevPage}>Previous</button>
          <button onClick={handleNextPage}>Next</button>
        </div>
       
      </div>
          
        
      
    );
  }
  
  export default App;