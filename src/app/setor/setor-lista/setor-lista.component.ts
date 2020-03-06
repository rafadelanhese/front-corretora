import { SetorService } from '../setor.service';
import { Component, OnInit } from '@angular/core';
import { Setor } from '../setor';


@Component({
  selector: 'app-setor-lista',
  templateUrl: './setor-lista.component.html',
  styleUrls: ['./setor-lista.component.css']
})
export class SetorListaComponent implements OnInit {

  setores : Setor[];

  constructor(private setorService : SetorService) { }

  ngOnInit(): void {
    this.setorService.getList().subscribe(dados => this.setores = dados);
  }

}
