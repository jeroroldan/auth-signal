import { Component, inject,computed } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent {
  private authService = inject(AuthService);

  public user = computed(() => this.authService.currenUser());

  // get user(){
  //   return this.authService.currenUser()
  // }

  onLogout(){
    this.authService.logout()
  }
}
