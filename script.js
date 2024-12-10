function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // صيغة 12 ساعة
    const displayHours = hours % 12 || 12;

    // إضافة الصفر للأرقام الأقل من 10
    const formatNumber = (num) => (num < 10 ? `0${num}` : num);

    // تحديث العناصر
    document.getElementById('hours').textContent = formatNumber(displayHours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('seconds').textContent = formatNumber(seconds);
    document.getElementById('am-pm').textContent = ampm;

    // تحديث التاريخ
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, dateOptions);
}

// تشغيل الساعة كل ثانية
setInterval(updateClock, 1000);

// تشغيل أول تحديث فور تحميل الصفحة
updateClock();
