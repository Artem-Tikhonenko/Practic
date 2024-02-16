const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        })

        console.log(str);
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {skills} = plan;

    console.log(skills.exp);
}

// showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    
    const {programmingLangs} = plan.skills;

    for (let key in programmingLangs) {
        console.log(`Язык ${key} изучен на ${programmingLangs[key]}`);
    }
    
}

// showProgrammingLangs(personalPlanPeter);