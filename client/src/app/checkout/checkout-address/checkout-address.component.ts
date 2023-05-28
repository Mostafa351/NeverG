import { AccountService } from 'src/app/account/account.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IAddress } from 'src/app/shared/models/address';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm: FormGroup | undefined;
  constructor(private accountService: AccountService, private toaster: ToastrService) { }
  ngOnInit(): void {
  }
  saveUserAddress() {
    this.accountService.updateUserAddress(this.checkoutForm?.get('addressForm')?.value).subscribe({
      next: (address: IAddress) => {
        this.toaster.success('Address Saved Successfully');
        this.checkoutForm?.get('addressForm')?.reset(address);
      },
      error: (error) => {
        this.toaster.error(error.message);
        console.log(error);

      }
    });
  }

}
