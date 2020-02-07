import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Dell',
    children: [
      {
        name: 'Model1',
        children: [
          { name: 'Ram:4Gb' },
          { name: 'Rom:1Tb' },
          { name: 'Os: Windows' }
        ]
      }, {
        name: 'Model2',
        children: [
          { name: 'Ram:8Gb' },
          { name: 'Rom:250Gb' },
          { name: 'Os: Windows' }
        ]
      },
    ]

  },
  {
    name: 'Lenovo',
    children: [
      {
        name: 'Model1',
        children: [
          { name: 'Ram:12Gb' },
          { name: 'Rom:500Gb' },
          { name: 'Os:Ubntu' }
        ]
      }, {
        name: 'Model2',
        children: [
          { name: 'Ram:8Gb' },
          { name: 'Rom:250Gb' },
          { name: 'Os:Windows' }
        ]
      },
    ]

  },
  {
    name: 'HP',
    children: [
      {
        name: 'Model1',
        children: [
          { name: 'Ram:8Gb' },
          { name: 'Rom:500Gb' },
          { name: 'Os:Ubuntu' }
        ]
      }, {
        name: 'Model2',
        children: [
          { name: 'Ram:8Gb' },
          { name: 'Rom:500Gb' },
          { name: 'Os:Ubuntu' }
        ]
      },
    ]

  },
  {
    name: 'Acer',
    children: [
      {
        name: 'Model1',
        children: [
          { name: 'Ram:16Gb' },
          { name: 'Rom:125Gb' },
          { name: 'Os: Windows' }
        ]
      }, {
        name: 'Model2',
        children: [
          { name: 'Ram:16Gb' },
          { name: 'Rom:125Gb' },
          { name: 'Os: Windows' }
        ]
      },
    ]

  },
];
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
