export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private creationDate: Date,
        private userId: string) { }

    public getId() {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getTittle() {
        return this.title;
    }

    public setTittle(title: string): void {
        this.title = title;
    }

    public getDescription() {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getCreationDate() {
        return this.creationDate;
    }

    public setCreationDate(creationDate: Date): void {
        this.creationDate = creationDate;
    }

    public getUserId() {
        return this.userId;
    }

    public setUserId(userId: string): void {
        this.userId = userId;
    }
}