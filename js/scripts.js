window.onload = function() {
    UpdateValue();
};
function UpdateValue(){
    var els = document.getElementsByClassName('menu-position-inactive');
    if(els.length > 1){
        document.getElementById('blockjs').style.display = 'flex';
        document.getElementById("main-container-m-content-text-h1").innerText="Любите супергероев? Мечтали стать суперменом или человеком пауком? У нас вы сможете  примерить на себе роль супергероя.  Мир в опасности и только вы сможете его спасти! Наставники помогут героям  справиться с трудностями,  ведь им предстоит летать над городами и спасать мирных жителей от нападений нашествия суперзлодеев.";
        document.getElementById("imgjs").src="../imgs/super.jpg";
        document.getElementById("imgjs").style.display="block";
        document.getElementById("01").classList.add('menu-position-active');
    }
}
function factive(element) {
    var els = document.getElementsByClassName('menu-position-inactive');
    document.getElementById('blockjs').style.display = 'flex';
    for(var i = 0; i < els.length; i++){
        els[i].className = 'menu-position-inactive';
    }
    element.classList.add('menu-position-active');
    if(element.id == "01") {
        document.getElementById("main-container-m-content-text-h1").innerText="Любите супергероев? Мечтали стать суперменом или человеком пауком? У нас вы сможете  примерить на себе роль супергероя.  Мир в опасности и только вы сможете его спасти! Наставники помогут героям  справиться с трудностями,  ведь им предстоит летать над городами и спасать мирных жителей от нападений нашествия суперзлодеев.";
        document.getElementById("imgjs").src="../imgs/super.jpg";
        document.getElementById("imgjs").style.display="block";
    }
    if(element.id == "02") {
        document.getElementById("main-container-m-content-text-h1").innerText="Игровая программа по мотивам одноименного, нашумевшего сериала. Вас ждут суровые виртуальные испытания, без реальных последствий!  Все вы становитесь участниками “смертельного” шоу, правила которого предельно просты: для победы нужно пройти шесть испытаний, позаимствованные из самых популярных VR  игр и не только. За соблюдением выполнения правил будет следить ведущий и  надзиратели.";
        document.getElementById("imgjs").src="../imgs/14.JPG";
        document.getElementById("imgjs").style.display="block";
    }
    if(element.id == "03") {
        document.getElementById("main-container-m-content-text-h1").innerText="Если вы любите CS или PUBG у нас для вас отличная новость! Добро пожаловать на фронт бойцы! Вас ждут командные бои, совместные задания, головокружительный экшн в самых популярных шутерах виртуальной реальности. И как только вы овладеете  искусством войны,  вас отправят на ваше главное боевое  задание где вы сразитесь командами!";
        document.getElementById("imgjs").src="../imgs/pablo.jpg";
        document.getElementById("imgjs").style.display="block";
    }
    if(element.id == "04") {
        document.getElementById("main-container-m-content-text-h1").innerText="Вас ждет увлекательное путешествие в мир магии и технологий вместе с Senjoy. Внутри виртуального мира вы сможете посетить Хогвартс, варить зелья,  познакомиться с невиданными фантастическими  зверями, сразиться со злыми волшебниками и многое другое. А в реальном - познакомиться с химией и участвовать в захватывающих научных экспериментах.";
        document.getElementById("imgjs").src="../imgs/chem.jpg";
        document.getElementById("imgjs").style.display="block";
    }
    if(element.id == "05") {
        document.getElementById("main-container-m-content-text-h1").innerText="Увлекательные и яркие соревнования ждут самых смелых! Игроки делятся на команды, и отправляются в различные игровые зоны. Каждая из которых представляет собой игровую зону  для команд. Команды соревнуются в ловкости, точности и решении логических задач. Тренируйте меткость, умение работать в команде, скорость, ловкость, стараясь победить команду соперника. Все ваши результаты будут записывать рефери, чтобы в конце определить победителей нашего турнира!";
        document.getElementById("imgjs").src="../imgs/tourn.jpg";
        document.getElementById("imgjs").style.display="block";
    }
    if(element.id == "06") {
        document.getElementById("main-container-m-content-text-h1").innerText="Почувствуйте себя студентами Школы Шпионов! Вас ждут самые разные виды испытаний: виртуальные боевые симуляторы, тренировка ловкости, шпионские шифры, а также командное задание повышенной сложности, где необходимо использовать навыки саперного дела. Игроки научатся мастерски стрелять, разовьют логическое мышление и смогут принимать молниеносные решения в экстренной ситуации.";
        document.getElementById("imgjs").src="../imgs/spy.jpg";
        document.getElementById("imgjs").style.display="block";
    }
    if(element.id == "07") {
        document.getElementById("main-container-m-content-text-h1").innerText="Вас ждут увлекательное соревнование по мотивам популярнейшего шоу “Форт Боярд”. Участникам предстоит побороться за право обладать сокровищем форта. Программа нацелена на командообразование, сочетающая как реальные активные и логические задачи, так и виртуальные.  В этой игре нет возможности дать слабину, ведь каждый участник понимает, что является частью команды, команды, которая в каждом состязании должна выложиться по максимуму и завоевать заветный ключ!   -  все это поможет им заполучить сокровища форта! ";
        document.getElementById("imgjs").src="../imgs/fort.jpg";
        document.getElementById("imgjs").style.display="block";
    }
    if(element.id == "08") {
        document.getElementById("main-container-m-content-text-h1").innerText="Скоро!!!";
        document.getElementById("imgjs").src="../imgs/strike.jpg";
        document.getElementById("imgjs").style.display="block";
    }
    if(element.id == "09") {
        document.getElementById("main-container-m-content-text-h1").innerText="Скоро!!!";
        document.getElementById("imgjs").src="../imgs/craft.webp";
        document.getElementById("imgjs").style.display="block";
    }
}