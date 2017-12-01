/*! jQuery Validation Plugin - v1.13.0 - 7/1/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","../jquery.validate.min"],a):a(jQuery)}(function(a){a.extend(a.validator.messages,{required:"هذا الحقل إلزامي",remote:"يرجى تصحيح هذا الحقل للمتابعة",email:"رجاء إدخال عنوان بريد إلكتروني صحيح",url:"رجاء إدخال عنوان موقع إلكتروني صحيح",date:"رجاء إدخال تاريخ صحيح",dateISO:"رجاء إدخال تاريخ صحيح (ISO)",number:"رجاء إدخال عدد بطريقة صحيحة",digits:"رجاء إدخال أرقام فقط",creditcard:"رجاء إدخال رقم بطاقة ائتمان صحيح",equalTo:"رجاء إدخال نفس القيمة",extension:"رجاء إدخال ملف بامتداد موافق عليه",maxlength:a.validator.format("الحد الأقصى لعدد الحروف هو {0}"),minlength:a.validator.format("الحد الأدنى لعدد الحروف هو {0}"),rangelength:a.validator.format("عدد الحروف يجب أن يكون بين {0} و {1}"),range:a.validator.format("رجاء إدخال عدد قيمته بين {0} و {1}"),max:a.validator.format("رجاء إدخال عدد أقل من أو يساوي (0}"),min:a.validator.format("رجاء إدخال عدد أكبر من أو يساوي (0}")})});