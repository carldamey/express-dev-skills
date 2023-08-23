const skills = [
    {id: 1651,
    skill: "skill1",
    learned: true,},
    {id: 2121,
    skill: "skill2",
    learned: true,},
    {id: 3451,
    skill: "skill3",
    learned: true,}
]

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function update(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
}

function create(skill) {
    skill.id = Date.now() % 100000000
    skills.push(skill)
}

module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,
    update,
}