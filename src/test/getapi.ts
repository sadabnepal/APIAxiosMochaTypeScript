import { expect } from 'chai';
import { request } from 'config/request';
import { endpoints } from 'services/endpoints';

describe('GET API validation', () => {

    it('should fetch page data using query params option', async () => {
        const response = await request.get(endpoints.users, { params: { page: 3 } })
        expect(response.data.data, "response should be empty").to.be.empty
        expect(response.data.page).to.equal(3)
        expect(response.data.per_page).to.equal(6)
        expect(response.data.total).to.equal(12)
    });

    it('should fetch page data using query inline with endpoint', async () => {
        const response = await request.get(endpoints.usersByPage(2))
        expect(response.data.data, "response should not be empty").not.to.be.empty
        expect(response.data.page).to.equal(2)
        expect(response.data.per_page).to.equal(6)
        expect(response.data.total).to.equal(12)
    });

});