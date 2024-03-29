function setLanguage(lan){
    switch (lan){
        case "de":
            document.title = "Countdown Zähler"
            document.getElementById("toptext").textContent = "Übrige Zeit:"
            document.getElementById("clock_units_days").textContent = "Tage,"
            document.getElementById("clock_units_hours").textContent = "Stunden,"
            document.getElementById("clock_units_mins").textContent = "Minuten,"
            document.getElementById("clock_units_secs").textContent = "Sekunden"
            document.getElementById("unit_switch_div_text").textContent = "Eine-Maßeinheit Modus"

            document.getElementById("clock_alter_unit").options[0].textContent = "Milisekunden"
            document.getElementById("clock_alter_unit").options[1].textContent = "Sekunden"
            document.getElementById("clock_alter_unit").options[2].textContent = "Minuten"
            document.getElementById("clock_alter_unit").options[3].textContent = "Stunden"
            document.getElementById("clock_alter_unit").options[4].textContent = "Tage"
            document.getElementById("clock_alter_unit").options[5].textContent = "Wochen"
            document.getElementById("clock_alter_unit").options[6].textContent = "Monaten"
            document.getElementById("clock_alter_unit").options[7].textContent = "Jahre"
            document.getElementById("clock_alter_unit").options[8].textContent = "Prozent"
            break
    
        case "zh":
            document.title = "倒数计时器"
            document.getElementById("toptext").textContent = "剩余时间："
            document.getElementById("clock_units_days").textContent = "天,"
            document.getElementById("clock_units_hours").textContent = "小时,"
            document.getElementById("clock_units_mins").textContent = "分钟,"
            document.getElementById("clock_units_secs").textContent = "秒"
            document.getElementById("unit_switch_div_text").textContent = "单一计量单位"

            document.getElementById("clock_alter_unit").options[0].textContent = "毫秒"
            document.getElementById("clock_alter_unit").options[1].textContent = "秒"
            document.getElementById("clock_alter_unit").options[2].textContent = "分钟"
            document.getElementById("clock_alter_unit").options[3].textContent = "小时"
            document.getElementById("clock_alter_unit").options[4].textContent = "天"
            document.getElementById("clock_alter_unit").options[5].textContent = "星期"
            document.getElementById("clock_alter_unit").options[6].textContent = "个月"
            document.getElementById("clock_alter_unit").options[7].textContent = "年"
            document.getElementById("clock_alter_unit").options[8].textContent = "百分"
            break
    
        case "hu":
            document.title = "Visszaszámláló"
            document.getElementById("toptext").textContent = "Hátra lévő idő:"
            document.getElementById("clock_units_days").textContent = "nap,"
            document.getElementById("clock_units_hours").textContent = "óra,"
            document.getElementById("clock_units_mins").textContent = "perc,"
            document.getElementById("clock_units_secs").textContent = "másodperc"
            document.getElementById("unit_switch_div_text").textContent = "Egységes mértékegység"

            document.getElementById("clock_alter_unit").options[0].textContent = "ezredmásodperc"
            document.getElementById("clock_alter_unit").options[1].textContent = "másodperc"
            document.getElementById("clock_alter_unit").options[2].textContent = "perc"
            document.getElementById("clock_alter_unit").options[3].textContent = "óra"
            document.getElementById("clock_alter_unit").options[4].textContent = "nap"
            document.getElementById("clock_alter_unit").options[5].textContent = "hét"
            document.getElementById("clock_alter_unit").options[6].textContent = "hónap"
            document.getElementById("clock_alter_unit").options[7].textContent = "év"
            document.getElementById("clock_alter_unit").options[8].textContent = "százalék"
            break
    
        default:
            document.title = "Countdown Timer"
            document.getElementById("toptext").textContent = "Time left:"
            document.getElementById("clock_units_days").textContent = "days,"
            document.getElementById("clock_units_hours").textContent = "hours,"
            document.getElementById("clock_units_mins").textContent = "minutes,"
            document.getElementById("clock_units_secs").textContent = "seconds"
            document.getElementById("unit_switch_div_text").textContent = "Single unit mode"

            document.getElementById("clock_alter_unit").options[0].textContent = "miliseconds"
            document.getElementById("clock_alter_unit").options[1].textContent = "seconds"
            document.getElementById("clock_alter_unit").options[2].textContent = "minutes"
            document.getElementById("clock_alter_unit").options[3].textContent = "hours"
            document.getElementById("clock_alter_unit").options[4].textContent = "days"
            document.getElementById("clock_alter_unit").options[5].textContent = "weeks"
            document.getElementById("clock_alter_unit").options[6].textContent = "months"
            document.getElementById("clock_alter_unit").options[7].textContent = "years"
            document.getElementById("clock_alter_unit").options[8].textContent = "percent"
            break
}}