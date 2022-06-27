const firstName = '#user_first_name';
const lastName = '#user_last_name';
const email = '#user_email';
const signUp = '#apidatagov_signup_form > div:nth-child(6) > div > button';
const text = '#apidatagov_signup > p:nth-child(1)';
const key = '#apidatagov_signup > code';
const reqFirst = '#parsley-id-5 > li';
const reqLast = '#parsley-id-7 > li';
const reqEmail = '#parsley-id-9 > li';

const API = {
    generateAPI: async (page, fName, lName, mail) => {
        await page.click(firstName);
        await page.fill(firstName, fName);
        await page.click(lastName);
        await page.fill(lastName, lName);
        await page.click(email);
        await page.fill(email, mail);
        await page.click(signUp);
        await page.waitForTimeout(1000);
        const isKey = await page.$(key);
        return isKey;
    },
    getRequiredFields: async (page) => {
        await page.click(signUp);
        await page.waitForTimeout(1000);
        const req1 = await page.textContent(reqFirst);
        const req2 = await page.textContent(reqLast);
        const req3 = await page.textContent(reqEmail);
        const required = `${req1} ${req2} ${req3}`;
        return required;
    },
}

export default API;
