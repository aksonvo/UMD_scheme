// Toggle between Regular Maintenance and Power Shortage diagrams
document.getElementById('regularBtn').addEventListener('click', function() {
    document.getElementById('regularDiagram').style.display = 'grid';
    document.getElementById('shortageDiagram').style.display = 'none';
    document.getElementById('regularBtn').classList.add('active');
    document.getElementById('shortageBtn').classList.remove('active');
});

document.getElementById('shortageBtn').addEventListener('click', function() {
    document.getElementById('regularDiagram').style.display = 'none';
    document.getElementById('shortageDiagram').style.display = 'grid';
    document.getElementById('shortageBtn').classList.add('active');
    document.getElementById('regularBtn').classList.remove('active');
});
