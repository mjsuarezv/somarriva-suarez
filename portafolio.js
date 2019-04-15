// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Al Seco",
    about: "2017 - Taller 03",
}, {
    figure: "media/foto-02.jpg",
    title: "Chipé",
    about: "2018 - Taller 04, examen 1",
}, {
    figure: "media/foto-03.jpg",
    title: "Erco",
    about: "2018 - Taller 04, examen 2",
}, {
    figure: "media/foto-04.jpg",
    title: "Lámpara de Sal",
    about: "2018 - Estructura y materiales",
}, {
    figure: "media/foto-05.jpg",
    title: "Skala",
    about: "2018 - Taller 04, examen 3",
}, {
    figure: "media/foto-06.jpg",
    title: "Del Huerto al Instante",
    about: "2018 - Taller 05, examen 1",
}, {
    figure: "media/foto-07.jpg",
    title: "Cervezas +56",
    about: "2018 - Taller 05, examen 2",
}, {
    figure: "media/foto-08.jpg",
    title: "Silla",
    about: "2019 - Taller 06",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
