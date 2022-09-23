/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Account } from '@angular-anim/shared/models';
import { AccountSummaryComponent } from './account-summary.component';

// TODO: 9. Topics in this file: Angular Unit Testing w/ Jest
describe('AccountSummaryComponent', () => {
  let component: AccountSummaryComponent;
  let fixture: ComponentFixture<AccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should retrieve accounts', () => {
    expect.assertions(2);
    expect(component.accounts$).toBeTruthy();
    component.accounts$.subscribe(acc => {
      expect(acc.length).toBe(4);
    });
  });

  describe("#filterAccounts", () => {
    it('should return filter accounts', () => {
      // TODO: 10. this test isn't doing anything atm, how can we make it more meaningful?
      const accounts: Account[] = [
        { id: 1234, balance: 7500, currency: "cad" },
        { id: 1235, balance: 4500, currency: "cad" },
        { id: 1236, balance: 2102, currency: "usd" },
        { id: 1237, balance: 4855, currency: "usd" },
        { id: 1238, balance: 9184, currency: "usd" },
        { id: 1239, balance: 7284, currency: "usd" },
        { id: 1240, balance: 9834, currency: "usd" },
        { id: 1241, balance: 6184, currency: "usd" },
        { id: 1242, balance: 5284, currency: "usd" },
        { id: 1243, balance: 7426, currency: "usd" },
        { id: 1244, balance: 9347, currency: "usd" },
        { id: 1245, balance: 6284, currency: "usd" },
        { id: 1246, balance: 1245, currency: "usd" },
      ];

      

      const expectedFilterAccount = [
        { id: 1234, balance: 7500, currency: "cad" },
        { id: 1235, balance: 4500, currency: "cad" },
      ]

      const filteredAccount = component.filterAccounts( accounts[0].currency );
      expect(filteredAccount).toStrictEqual(expectedFilterAccount);
    });
  });
});
