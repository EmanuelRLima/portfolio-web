import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  showprojet(){

    let Projetos = document.getElementById('project');
    if (typeof Projetos == 'undefined' || Projetos === null)
    return;
    Projetos.style.display = 'block';

    let idem = document.getElementById('start');
    if (typeof idem == 'undefined' || idem === null)
    return;
    idem.style.opacity = '20%';
  }
  showoffprojet(){
    let Projetos = document.getElementById('project');
    if (typeof Projetos == 'undefined' || Projetos === null)
    return;
    Projetos.style.display = 'none';

    let idem = document.getElementById('start');
    if (typeof idem == 'undefined' || idem === null)
    return;
    idem.style.opacity = '100%';
}
  constructor() { }

  ngOnInit(): void {
  }

}
