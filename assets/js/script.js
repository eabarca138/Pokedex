$( document ).ready(function() {
    $('#imagen').hide()
    $('#simboloTipo').hide()


    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['HP', 'Attack', 'Defense', 'Special attack', 'Special defense', 'Speed'],
            datasets: [{
                label: 'Pokémon stats',
                borderWidth: 1,
            }]
        },
    });
});


const peticionApi = function(){
    
    let pokemon = $('#input').val().trim().toLowerCase();
    
    
    /* NOMBRE */
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#nombre1').text(JSON.stringify(data.name).toUpperCase());
            $('#nombre2').text(JSON.stringify(data.name).toUpperCase());
        }
    });
    
    /* IMAGEN */
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#imagen').hide(120)
            $('#imagen').attr("src", data.sprites.front_default);
            $('#imagen').fadeIn(600)
        }
    });
    
    /* STATUS */

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#HP').text(JSON.stringify(data.stats[0].base_stat));
        }
    });
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#ataque').text(JSON.stringify(data.stats[1].base_stat));
        }
    });
    
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#defensa').text(JSON.stringify(data.stats[2].base_stat));
        }
    });
    
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#ataque-especial').text(JSON.stringify(data.stats[3].base_stat));
        }
    });
    
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#defensa-especial').text(JSON.stringify(data.stats[4].base_stat));
        }
    });
    
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#velocidad').text(JSON.stringify(data.stats[5].base_stat));
        }
    });
    
    
    /* ARREGLO GRÁFICO */
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            let arrayStatus =  []
            $.each(data.stats, function(i, el){
                arrayStatus[i] = data.stats[i].base_stat
            })

            /* GRÁFICO */
            
            var ctx = $('#myChart');
            var myChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['HP', 'Attack', 'Defense', 'Special attack', 'Special defense', 'Speed'],
                    datasets: [{
                        
                        label: 'Pokémon stats',
                        data: arrayStatus,
                        backgroundColor: "rgba(200,0,0,0.2)",
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2
                    }]
    },
    
});
        }
    });
    
    
    
    /* CARACTERÍSTICAS */
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            let tipo = data.types[0].type.name
            $('#type').text(JSON.stringify(tipo));
            
            if (tipo == "water"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Water.png")
                $('#simboloTipo').fadeIn(600)
            }    else if (tipo == "bug"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Bug.png")
                $('#simboloTipo').fadeIn(600)
            }    
            else if (tipo == "dark"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Dark.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "dragon"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Dragon.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "electric"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Electric.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "fairy"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Fairy.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "fighting"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Fighting.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "fire"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Fire.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "flying"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Flying.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "ghost"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Ghost.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "grass"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Grass.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "ground"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Ground.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "ice"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Ice.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "normal"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Normal.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "poison"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Poison.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "psychic"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Psychic.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "rock"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Rock.png")
                $('#simboloTipo').fadeIn(600)
            }
            else if (tipo == "steel"){
                $('#simboloTipo').hide(120)
                $('#simboloTipo').attr("src", "assets/img/Steel.png")
                $('#simboloTipo').fadeIn(600)
            }
        }
    });
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#move').text(JSON.stringify(data.moves[0].move.name));
        }
    });
    
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#move2').text(JSON.stringify(data.moves[2].move.name));
        }
    });

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#ability').text(JSON.stringify(data.abilities[1].ability.name));
        }
    });

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $('#idPokemon').text(JSON.stringify(data.id));
        }
    });

    $('#input').val('');
};

$('#pokebola').click(peticionApi)

$(input).on('keypress',function(e) {
    if(e.which == 13) {
        peticionApi()
    }
});