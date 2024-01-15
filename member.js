function skillsMember() {
    let message = "My skills are: ";
    for (let i = 0; i < this.skills.length; i++) {
        message += this.skills[i];
        if (i < this.skills.length - 1) {
            message += ", ";
        }
    }
    console.log(message);
}