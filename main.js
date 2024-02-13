const titles = {
    main: "Ти будеш моєю Валентинкою?",
    no: "Альо, ти що там задумала?",
    yes: "Ти моя бусінка🥰"
}

const links = {
    no: 'media/fight.gif',
    yes: 'media/kiss.gif'
}

let noWasClicked = false;

function getRandomPosition() {
    const maxX = window.innerWidth - 50;
    const maxY = window.innerHeight - 50;

    return { left: Math.floor(Math.random() * (maxX + 1)), top: Math.floor(Math.random() * (maxY + 1)) };
}

$('#yes').on('click', function () {
    $('#currentDesc').text(titles.yes);
    $('.main-gif').attr('src', links.yes);
    $('.main-buttons').hide();
    $('.main h1').hide()
});

const moveButton = () => {
    $('#no').css({
        position: 'absolute',
        left: `${getRandomPosition().left}px`,
        top: `${getRandomPosition().top}px`
    });
}


$('#no').on('click', function () {
    if (!noWasClicked) {
        $('#currentDesc').text(titles.no);
        $('.main-gif').attr('src', links.no);
        $('.main h1').hide()
        moveButton();
        noWasClicked = true;
    } else {
        moveButton();
    }
});

$('#no').on('mouseenter', function () {
    console.log(noWasClicked);
    if (noWasClicked) {
        moveButton();
    }
});

