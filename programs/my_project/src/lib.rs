use anchor_lang::prelude::*;
use borsh::{BorshSerialize, BorshDeserialize};

declare_id!("5EhLWntoYBe6pb7drV4yq4ne1BfJTLK6EnFAG4kebQh2");

#[program]
pub mod my_project {
    use std::io::empty;

    use super::*;

    #[derive(Accounts)]
    pub struct Initialize<'info> {
        #[account(init, payer = user, space = 8 + 8)]
        pub advert_account: Account<'info, AdvertAccount>,
        #[account(mut)]
        pub user: Signer<'info>,
        pub system_program: Program<'info, System>,
    }

    #[derive(Accounts)]
    pub struct Update<'info> {
        #[account(mut)]
        pub advert_account: Account<'info, AdvertAccount>,
    }
   
    #[derive(Accounts)]
    pub struct Decrement<'info> {
        #[account(mut)]
        pub advert_account: Account<'info, AdvertAccount>,
    }

    #[derive(Accounts)]
    pub struct GetAllAdverts<'info> {
        #[account(signer)]
        pub authority: AccountInfo<'info>,
        pub advert_program: Program<'info, System>,
    }

    #[account]
    pub struct AdvertAccount {
        pub brand: String,
        pub model: String,
        pub year: u16,
        pub price: u64,
    }
    #[derive(BorshSerialize, BorshDeserialize)]
    pub enum Succ{
         MissingBlank(String),
         Succes(String),
    }
    
    pub fn initialize(ctx: Context<Initialize>, brand: String, model: String, year: u16, price: u64) -> Result<(Succ)> {
        if brand.is_empty() || model.is_empty() || year<=1900 {

            Ok(Succ::MissingBlank("Boşluklardan birini doldurmadınız".to_string()))
        }
        else {
            let advert_account = &mut ctx.accounts.advert_account;
        advert_account.brand = brand;
        advert_account.model = model;
        advert_account.year = year;
        advert_account.price = price;
        Ok(Succ::Succes("İlan başarıyla yayınlandı".to_string()))
        }
    }

    pub fn update(ctx: Context<Update>, price: u64) -> Result<()> {
        let advert_account = &mut ctx.accounts.advert_account;
        advert_account.price = price;
        Ok(())
    }

    pub fn decrement(ctx: Context<Decrement>, price: u64) -> Result<()> {
        let advert_account = &mut ctx.accounts.advert_account;
        advert_account.price -= price;
        Ok(())
    }

    pub fn get_all_adverts(ctx: Context<GetAllAdverts>) -> Result<Vec<AdvertAccount>> {
        let accounts = &ctx.accounts;
        let advert_accounts: Vec<AdvertAccount> = vec![];
        Ok(advert_accounts)
    }
    
}
