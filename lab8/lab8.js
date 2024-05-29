//Выводим текущую дату на страницу внутрь тега с id="current-date"
//Россия
function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    // Вывод даты и времени для разных локалей 
    out.innerHTML = `
        <div style="margin:10px"><b>Дата и время для русской локали:</b> ${today.toLocaleString('ru-RU')}</div>
        <div style="margin:10px"><b>Дата и время для греческой локали:</b> ${today.toLocaleString('el-GR')}</div>
        <div style="margin:10px"><b>Дата и время для эстонской локали:</b> ${today.toLocaleString('et-EE')}</div>
        <div style="margin:10px"><b>Дата и время для японской локали:</b> ${today.toLocaleString('ja-JP')}</div>
        <div style="margin:10px"><b>Дата и время для чилийской локали:</b> ${today.toLocaleString('es-CL')}</div>
        <div style="margin:10px"><b>Дата и время для французской локали:</b> ${today.toLocaleString('fr-FR')}</div>
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    
    // информация о текущем годе, месяце, дате и дне недели
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const date = currentDate.getDate();
    const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });

    const currentInfoString = `
        <p><b>Год:</b>  ${year}</p>
        <p><b>Месяц:</b>  ${month}</p>
        <p><b>Дата:</b>  ${date}</p>
        <p><b>День недели:</b>  ${dayOfWeek}</p>
    `;
    
    document.getElementById('currentInfo').innerHTML = currentInfoString;
});





function getDayOfWeek() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value) - 1;
    var year = parseInt(document.getElementById("year").value);

    var date = new Date(year, month, day);
    var daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var dayOfWeek = daysOfWeek[date.getDay()];

    document.getElementById("result").innerText = "День недели: " + dayOfWeek;
}