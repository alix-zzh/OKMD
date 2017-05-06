/**
 * Created by alex on 24.4.17.
 */
var p=1,m=1,q=1;
var A=[],B=[],G=[],H=[];
var C=[];

var sum=1;
var multi=1;
var equal=1;


var time=0;

var n=50;

function createMatrix(row,colom) {
    var matrix=[];
    for(var i=0; i<row; i++) {
        matrix[i] = new Array(colom);
    }
    for(var i=0;i<row;i++){
        for(var j=0;j<colom;j++)
            matrix[i][j]=(Math.random()*2-1).toFixed(1);
            // matrix[i][j]=Math.floor(Math.random() * (5 - 2)) + 2
    }
    return matrix;
}

function viewMatrix(tableData) {
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');

        tableData.forEach(function(rowData) {
            var row = document.createElement('tr');

            rowData.forEach(function(cellData) {
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);
        document.body.appendChild(table);

}

function executeAlgorithm() {
    for(var i=0;i<C.length;i++){
        for(var j=0;j<C[i].length;j++){
            if(ifPart(i,j))
                C[i][j]=thenPart(i,j).toFixed(3);
            else
                C[i][j]=elsePart(i,j).toFixed(3);
        }

    }

}


function ifPart(i, j) {
    var answer=false;
    for(var x=0;x<m;x++)
        if(G[x][i]<H[j][x]){
            answer=true;
        }

    time+=Math.ceil(m/n)*equal;

    return answer;
}
function thenPart(i, j) {
    var res = 1;

    for(var k=0;k<m;k++)
        res*=A[i][k]*B[k][j];

    time+=Math.ceil(m/n)*multi;
    time+=Math.ceil((m-1)/n)*multi;

    return res;

}
function elsePart(i, j) {
    var res = 0;

    for(var k=0;k<m;k++)
        res+=A[i][k]*B[k][j];

    time+=Math.ceil(m/n)*multi;
    time+=Math.ceil((m-1)/n)*sum;

    return res;

}