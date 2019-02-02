$(document).ready(function() {
    $('input[type="button"]').click(function(){
        var date = $('#input').val();
        var mas = date.split("-");
        if ( !date ) {
            alert("Введена некорректная дата");
            $('#output').val("");
            return;
        }
        if ( (mas[1] == 1 && mas[2] <= 20) || (mas[1] == 12 && mas[2] >= 23) )
            $('#output').val("Козерог");
        else if ( (mas[1] == 1 && mas[2] >= 21) || (mas[1] == 2 && mas[2] <= 19) )
            $('#output').val("Водолей");
        else if ( (mas[1] == 2 && mas[2] >= 20) || (mas[1] == 3 && mas[2] <= 20) )
            $('#output').val("Рыбы");
        else if ( (mas[1] == 3 && mas[2] >= 21) || (mas[1] == 4 && mas[2] <= 20) )
            $('#output').val("Овен");
        else if ( (mas[1] == 4 && mas[2] >= 21) || (mas[1] == 5 && mas[2] <= 21) )
            $('#output').val("Телец");
        else if ( (mas[1] == 5 && mas[2] >= 22) || (mas[1] == 6 && mas[2] <= 21) )
            $('#output').val("Близнецы");
        else if ( (mas[1] == 6 && mas[2] >= 22) || (mas[1] == 7 && mas[2] <= 22) )
            $('#output').val("Рак");
        else if ( (mas[1] == 7 && mas[2] >= 23) || (mas[1] == 8 && mas[2] <= 21) )
            $('#output').val("Лев");
        else if ( (mas[1] == 8 && mas[2] >= 22) || (mas[1] == 9 && mas[2] <= 23) )
            $('#output').val("Дева");
        else if ( (mas[1] == 9 && mas[2] >= 24) || (mas[1] == 10 && mas[2] <= 23) )
            $('#output').val("Весы");
        else if ( (mas[1] == 10 && mas[2] >= 24) || (mas[1] == 11 && mas[2] <= 22) )
            $('#output').val("Скорпион");
        else if ( (mas[1] == 11 && mas[2] >= 23) || (mas[1] == 12 && mas[2] <= 22) )
            $('#output').val("Стрелец");
    });
});


