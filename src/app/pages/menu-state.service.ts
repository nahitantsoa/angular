@Injectable()
export class MenuStateService {
  private activeMenu = new BehaviorSubject<string|null>(null);
  
  setActiveMenu(menu: string) {
    this.activeMenu.next(menu);
  }
  
  getActiveMenu() {
    return this.activeMenu.asObservable();
  }
}