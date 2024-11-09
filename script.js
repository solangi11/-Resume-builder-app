function addEducation() {
    const container = document.getElementById('education-container');
    const div = document.createElement('div');
    div.className = 'education-entry';
    div.innerHTML = `
        <input type="text" placeholder="Institution" name="institution[]" required>
        <input type="text" placeholder="Degree" name="degree[]" required>
        <input type="text" placeholder="Year of Graduation" name="year[]" required>
        <button type="button" onclick="removeEntry(this)">Remove</button>
    `;
    container.appendChild(div);
}

function addExperience() {
    const container = document.getElementById('experience-container');
    const div = document.createElement('div');
    div.className = 'experience-entry';
    div.innerHTML = `
        <input type="text" placeholder="Company" name="company[]" required>
        <input type="text" placeholder="Position" name="position[]" required>
        <input type="text" placeholder="Duration" name="duration[]" required>
        <button type="button" onclick="removeEntry(this)">Remove</button>
    `;
    container.appendChild(div);
}

function addCertification() {
    const container = document.getElementById('certification-container');
    const div = document.createElement('div');
    div.className = 'certification-entry';
    div.innerHTML = `
        <input type="text" placeholder="Certification Name" name="certification[]" required>
        <input type="text" placeholder="Issuing Organization" name="issuer[]" required>
        <button type="button" onclick="removeEntry(this)">Remove</button>
    `;
    container.appendChild(div);
}

function addLanguage() {
    const container = document.getElementById('language-container');
    const div = document.createElement('div');
    div.className = 'language-entry';
    div.innerHTML = `
        <input type="text" placeholder="Language" name="language[]" required>
        <input type="text" placeholder="Proficiency (e.g., Fluent)" name="proficiency[]" required>
        <button type="button" onclick="removeEntry(this)">Remove</button>
    `;
    container.appendChild(div);
}

function removeEntry(button) {
    button.parentElement.remove();
}
