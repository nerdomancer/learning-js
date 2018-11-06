const axiosMock = jest.genMockFromModule('axios');

let mockResponse = {
    data : {
        shops : [{
            location : "test location",
            address : "test address"
        }]
    }
};

axiosMock.get.mockImplementation(getRequestMock);

function getRequestMock() {
    return new Promise(function(resolve) {
        axiosMock.delayTimer = setTimeout(function() {
            resolve(mockResponse);
        }, 400);
    });
}

module.exports = axiosMock;