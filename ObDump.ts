
export class ObDump {
    count: number = 1;
    data: Map<unknown, number> = new Map();

    label(ob: unknown): string {
        const item = this.data.get(ob);
        if (item !== undefined) {
            return this.toLabel(item);
        }

        const next = this.count;
        this.count++;
        this.data.set(ob, next);
        return this.toLabel(next);
    }

    private toLabel(item: number): string {
        return `#ob#${item}#`;
    }
}