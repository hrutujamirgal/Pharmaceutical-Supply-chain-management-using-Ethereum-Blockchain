## README: Pharmaceutical Supply Chain Management Using Blockchain

### Introduction
This project focuses on developing a Pharmaceutical Supply Chain Management system using blockchain technology. The objective is to ensure transparency, traceability, and security in the pharmaceutical supply chain. The system design provided outlines the various entities involved and their interactions.

### System Design
The system comprises the following entities:
- **Order Medicine**: Represents the action of ordering medicine.
- **Owner**: The central authority responsible for registering entities and overseeing the supply chain.
- **Raw Material Supplier**: Provides raw materials necessary for manufacturing medicines.
- **Manufacturer**: Produces the pharmaceutical products.
- **Distributor**: Distributes the manufactured products to retailers.
- **Retailer**: Sells the pharmaceutical products to end consumers.

### Interaction Flow
1. **Registering Entities**: The Owner registers the Raw Material Supplier, Manufacturer, Distributor, and Retailer in the blockchain network.
2. **Control Flow**: Each entity in the supply chain controls the next stage. For instance, the Raw Material Supplier controls the supply to the Manufacturer, the Manufacturer controls the distribution to the Distributor, and so on.
3. **Order Medicine**: The process begins with an order for medicine, initiating the supply chain flow.

### Technologies Used
- **Ganache**: Ganache is a local blockchain environment tailored for Ethereum development. It enables developers to simulate Ethereum network behavior, offering a controlled space for testing smart contracts and decentralized applications. This tool, part of the Truffle suite, ensures efficient and secure code validation and debugging without the need to interact with the live Ethereum network.
- **Truffle**: Truffle is an Ethereum development framework that simplifies the creation, testing, and deployment of blockchain applications. It provides tools for writing, compiling, and deploying smart contracts, streamlining the development process. Truffle's features include automated testing and asset management, making it a powerful tool for efficient Ethereum development.
- **React**: React is an open-source JavaScript library for building user interfaces, favored for its efficiency in developing modular and reusable components. Developed by Facebook, React's key features include a virtual DOM for optimal performance and a component-based architecture, making it widely used for creating responsive single-page applications.
- **Node.js**: Node.js is a server-side JavaScript runtime that enables developers to build scalable web applications. With a non-blocking, event-driven architecture, Node.js is well-suited for handling concurrent connections and real-time applications. Its unified JavaScript approach for both frontend and backend development, along with a rich ecosystem of npm packages, facilitates the creation of efficient and scalable web solutions.
- **Smart Contracts**: Smart contracts are self-executing blockchain code, automating agreements securely. Written in languages like Solidity, they operate on decentralized networks, enforcing terms and remaining immutable once deployed. Used in finance and supply chain, smart contracts use cryptography, may incur gas fees, and require careful development for security.

### Verification Functionality
The smart contract includes a `verifyBatchID` method for enhancing traceability and authenticity.

#### Key Features
1. **Verification Functionality**: The smart contract includes a `verifyBatchID` method for enhancing traceability and authenticity.
2. **Parameters**: The method takes two parameters: `medicineID` and `batchID`.
3. **Cryptographic Hashing**: Utilizes cryptographic hashing for secure verification.
4. **Comparison Process**: Compares the provided `batchID` with the stored `batchID` associated with the specified `medicineID`.
5. **Validity Check**: Returns `true` if the provided BatchID matches the stored value, indicating a valid BatchID.
6. **False Return**: Returns `false` if there is no match, signifying an invalid BatchID.
7. **Integrity Assurance**: The verification mechanism ensures the integrity and authenticity of medicines at different supply chain stages.
8. **Promotes Transparency**: By validating BatchIDs, the smart contract promotes transparency and reduces the risk of counterfeit products in the supply chain.

### Setup and Installation
1. **Clone the Repository**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
2. **Install Dependencies**
    ```bash
    npm install
    ```
3. **Configure Blockchain Network**
    - Set up the blockchain network (Ethereum/Hyperledger) as per the documentation.
    - Deploy smart contracts to the blockchain network.
4. **Run the Application**
    ```bash
    npm start
    ```
5. **Access the Application**
    - Open a web browser and navigate to `http://localhost:3000`

### Usage
1. **Register Entities**: The Owner registers all the entities (Raw Material Supplier, Manufacturer, Distributor, Retailer) in the system.
2. **Order Medicine**: Initiate an order for medicine through the application.
3. **Track Supply Chain**: Monitor the movement of the product through the supply chain stages on the blockchain ledger.

### Conclusion
This Pharmaceutical Supply Chain Management system ensures a transparent, traceable, and secure supply chain using blockchain technology. The design and implementation aim to mitigate issues such as counterfeiting and inefficiencies in the pharmaceutical industry.

### Contributors
- Sanjali Kale
- Sushant Jadhao
- Ishan Sirdeshpande
- Hrutuja Mirgal



This README file provides a comprehensive overview of the Pharmaceutical Supply Chain Management system using blockchain technology, based on the provided system design.
