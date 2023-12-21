document.addEventListener('DOMContentLoaded', function() {
    let joueur = 'X';
    let gameOver = false;
    let victoiresX = localStorage.getItem('victoiresX') || 0;
    let victoiresO = localStorage.getItem('victoiresO') || 0;
    let matchsNuls = localStorage.getItem('matchsNuls') || 0;
    const cases = document.querySelectorAll('.case');
    const status = document.querySelector('.partie__status');
    const rejouer = document.querySelector('.CTA__rejouer');
    const scoreX = document.querySelector('.score__x');
    const scoreO = document.querySelector('.score__o');
    const matchNul = document.querySelector('.match-nul');
    const reinitialiser = document.querySelector('.reinitialiser');

    rejouer.style.display = 'none';

    status.textContent = 'C\'est au tour du joueur X';
    scoreX.textContent = 'Victoires des X : ' + victoiresX;
    scoreO.textContent = 'Victoires des O : ' + victoiresO;
    matchNul.textContent = 'Match nul : ' + matchsNuls;

    cases.forEach(function(caseElement) {
        caseElement.addEventListener('click', function() {
            if (!caseElement.firstChild && !gameOver) {
                let img = document.createElement('img');
                img.src = joueur === 'X' ? 'images/x.svg' : 'images/o.svg';
                caseElement.appendChild(img);
                caseElement.classList.add('joueur-' + joueur);
                if (checkWin(img.src)) {
                    status.textContent = 'Le joueur ' + joueur + ' a gagné !';
                    rejouer.style.display = 'inline';
                    gameOver = true;
                    if (joueur === 'X') {
                        victoiresX++;
                        localStorage.setItem('victoiresX', victoiresX);
                        scoreX.textContent = 'Victoires des X : ' + victoiresX;
                    } else {
                        victoiresO++;
                        localStorage.setItem('victoiresO', victoiresO);
                        scoreO.textContent = 'Victoires des O : ' + victoiresO;
                    }
                } else if (checkDraw()) {
                    status.textContent = 'Égalité !';
                    rejouer.style.display = 'inline';
                    gameOver = true;
                    matchsNuls++;
                    localStorage.setItem('matchsNuls', matchsNuls);
                    matchNul.textContent = 'Match nul : ' + matchsNuls;
                } else {
                    joueur = joueur === 'X' ? 'O' : 'X';
                    status.textContent = 'C\'est au tour du joueur ' + joueur;
                }
            }
        });
    });

    rejouer.addEventListener('click', function() {
        cases.forEach(function(caseElement) {
            while(caseElement.firstChild) {
                caseElement.removeChild(caseElement.firstChild);
            }
        });
        status.textContent = 'C\'est au tour du joueur X';
        rejouer.style.display = 'none';
        joueur = 'X';
        gameOver = false;
    });

    function checkWin(imageSrc) {
        const lignes = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lignes.length; i++) {
            if (cases[lignes[i][0]].firstChild && 
                cases[lignes[i][1]].firstChild && 
                cases[lignes[i][2]].firstChild &&
                cases[lignes[i][0]].firstChild.src === imageSrc &&
                cases[lignes[i][1]].firstChild.src === imageSrc &&
                cases[lignes[i][2]].firstChild.src === imageSrc) {
                return true;
            }
        }
        return false;
    }

    function checkDraw() {
        return Array.from(cases).every(caseElement => caseElement.firstChild !== null);
    }

    reinitialiser.addEventListener('click', function() {
        victoiresX = 0;
        victoiresO = 0;
        matchsNuls = 0;
        localStorage.setItem('victoiresX', victoiresX);
        localStorage.setItem('victoiresO', victoiresO);
        localStorage.setItem('matchsNuls', matchsNuls);
        scoreX.textContent = 'Victoires des X : ' + victoiresX;
        scoreO.textContent = 'Victoires des O : ' + victoiresO;
        matchNul.textContent = 'Match nul : ' + matchsNuls;
    });
});