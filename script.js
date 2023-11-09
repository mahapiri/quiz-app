function startHtml() {
    let content = document.getElementById('card');
    content.innerHTML = '';
    content.innerHTML = /*html*/`
        <h5 class="card-title">Welcome to<br>The Awesome HTML Quiz</h5>
        <p class="card-text"></p>
        <p class="card-text"><small class="text-body-secondary"></small></p>
        <button type="button" class="btn btn-primary" onclick="goHtml()">Start Game</button>
    `
}

function goHtml() {
    let content = document.getElementById('card');
    content.innerHTML = '';
    content.innerHTML = /*html*/`
        <h5 class="mb-16">Wer hat HTML erfunden?</h5>
        <div>
        <div class="card mb-2">
        <div class="card-body">
            This is some text within a card body.
        </div>
        </div>
        <div class="card mb-2">
        <div class="card-body">
            This is some text within a card body.
        </div>
        </div>
        <div class="card mb-2">
        <div class="card-body">
            This is some text within a card body.
        </div>
        </div>
        <div class="card mb-2">
        <div class="card-body">
            This is some text within a card body.
        </div>
        </div>
        </div>

        <div class="question-footer">
            <span>
                <b>1</b> von <b>5</b> Fragen
            </span>
            <button type="button" class="btn btn-primary">Nächste Frage</button>
        </div>
    `
}