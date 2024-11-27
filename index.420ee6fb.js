!function(){var t="idle",e="playing",o="lose",r=new(function(){var r;function a(e,o,r){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,a),this.board=e||[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.score=0,this.status=t,this.winCallback=o,this.loseCallback=r}return r=[{key:"updateBoard",value:function(){for(var t=document.querySelectorAll(".field-cell"),e=0,o=0;o<this.board.length;o++)for(var r=0;r<this.board[o].length;r++){var a=t[e++],n=this.board[o][r],i=a.textContent;a.classList.remove("field-cell--".concat(i)),0===n?a.textContent="":(a.classList.add("field-cell--".concat(n)),a.textContent=n)}}},{key:"findEmptyCell",value:function(){for(var t=[],e=0;e<this.board.length;e++)for(var o=0;o<this.board.length;o++)0===this.board[e][o]&&t.push({row:e,col:o});return t[Math.floor(Math.random()*t.length)]}},{key:"addRandomTile",value:function(){var t=this.findEmptyCell();t&&(0===this.score&&(this.board[t.row][t.col]=2),this.updateBoard())}},{key:"addRandomCellAfterMoving",value:function(){var t=this.findEmptyCell();t&&(this.board[t.row][t.col]=.9>Math.random()?2:4,this.updateBoard())}},{key:"createColumn",value:function(t){for(var e=[],o=0;o<this.board.length;o++)0!==this.board[o][t]&&e.push(this.board[o][t]);return e}},{key:"updateColumn",value:function(t,e){for(var o=!1,r=0;r<this.board.length;r++)this.board[r][t]!==e[r]&&(this.board[r][t]=e[r],o=!0);return o}},{key:"resetGameStart",value:function(){this.score=0,this.status=e,this.board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.addRandomTile(),this.addRandomTile()}},{key:"updateBoardAfterMoving",value:function(){this.addRandomCellAfterMoving(),this.updateBoard(),this.getStatus()}},{key:"moveHorizontal",value:function(t){for(var e=this,o=0;o<this.board.length;o++)!function(o){for(var r=e.board[o].filter(function(t){return 0!==t}),a=[],n=0;n<r.length;n++){var i=r[n];if(i===r[n+1]){var s=2*i;a.push(s),e.getScore(!0,s),n++}else a.push(i)}for(;a.length<e.board[o].length;)t(a);e.board[o]=a}(o)}},{key:"moveLeft",value:function(){this.moveHorizontal(function(t){return t.push(0)}),this.updateBoardAfterMoving()}},{key:"moveRight",value:function(){this.moveHorizontal(function(t){return t.unshift(0)}),this.updateBoardAfterMoving()}},{key:"moveUp",value:function(){for(var t=0;t<this.board.length;t++){for(var e=this.createColumn(t),o=Array(e.length).fill(!0),r=0;r<e.length-1;r++)e[r]===e[r+1]&&o[r]&&o[r+1]&&(e[r]*=2,e.splice(r+1,1),o[r]=!1,this.getScore(!0,e[r]));for(;e.length<this.board.length;)e.push(0);this.updateColumn(t,e)}this.updateBoardAfterMoving()}},{key:"moveDown",value:function(){for(var t=0;t<this.board.length;t++){for(var e=this.createColumn(t),o=Array(e.length).fill(!0),r=e.length-1;r>0;r--)e[r]===e[r-1]&&o[r]&&o[r-1]&&(e[r]*=2,e.splice(r-1,1),o[r]=!1,this.getScore(!0,e[r]));for(;e.length<this.board.length;)e.unshift(0);this.updateColumn(t,e)}this.updateBoardAfterMoving()}},{key:"getState",value:function(){return this.board}},{key:"getStatus",value:function(){if(0===this.score)return this.status=t,this.status;for(var r=!1,a=!1,n=0;n<this.board.length;n++)for(var i=0;i<this.board[n].length;i++){var s=this.board[n][i];if(2048===s&&(r=!0),!a){if(0===s){a=!0;continue}var l=n<this.board.length-1&&s===this.board[n+1][i],h=i<this.board[n].length-1&&s===this.board[n][i+1];(l||h)&&(a=!0)}}return r?(this.status="win",this.winCallback()):a?this.status=e:(this.status=o,this.loseCallback()),this.status}},{key:"start",value:function(){this.resetGameStart()}},{key:"restart",value:function(){this.resetGameStart()}}],function(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(a.prototype,r),a}())(null,function(){h.classList.remove("hidden")},function(){u.classList.remove("hidden")}),a=document.querySelector(".start"),n=document.querySelectorAll(".field-cell"),i=document.querySelector(".game-score"),s=document.querySelector(".best__score"),l=document.querySelector(".message-start"),h=document.querySelector(".message-win"),u=document.querySelector(".message-lose");function c(){u.classList.add("hidden")}function d(){h.classList.add("hidden")}function f(){var t=localStorage.getItem("highScore")||0;s.textContent=t}f(),r.getScore=function(t,e){if(t&&e>0){var o,r,a;this.score+=e,o=this.score,i.textContent=o,r=this.score,(a=localStorage.getItem("highScore"))&&!(r>a)||(localStorage.setItem("highScore",r),f())}},a.addEventListener("click",function(){a.textContent="Restart",a.classList.remove("start"),a.classList.add("restart"),i.textContent="0",n.forEach(function(t){t.classList.remove("hidden")}),("win"===r.status||r.status===o)&&(d(),c()),r.start(),l.classList.add("hidden"),c(),d(),f()}),document.addEventListener("keydown",function(t){switch(t.key){case"ArrowLeft":r.moveLeft();break;case"ArrowRight":r.moveRight();break;case"ArrowUp":r.moveUp();break;case"ArrowDown":r.moveDown()}})}();
//# sourceMappingURL=index.420ee6fb.js.map