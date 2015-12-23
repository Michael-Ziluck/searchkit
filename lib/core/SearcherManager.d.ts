import { Searcher } from "./Searcher";
export declare class SearcherManager {
    searchers: Array<Searcher>;
    constructor();
    addSearcher(searcher: any): void;
    getAccessors(): any[];
    getState(): {};
    resetState(): void;
    setAccessorStates(query: any): void;
    notifyStateChange(oldState: any): void;
}
