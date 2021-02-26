document.getElementById('button').addEventListener('click', calculateArea)

let diameter = 0
let circumference = 0
let radius = 0
let area = 0

function calculateArea () {
  diameter = document.getElementById('insert').value

  diameter = parseInt(diameter)
  circumference = parseInt(circumference)
  area = parseInt(area)
  radius = parseInt(radius)
  radius = diameter / 2

  circumference = Math.PI * diameter
  document.getElementById('circle1').innerHTML = circumference

  area = Math.PI * Math.pow(radius, 2)
  document.getElementById('circle2').innerHTML = area
}
