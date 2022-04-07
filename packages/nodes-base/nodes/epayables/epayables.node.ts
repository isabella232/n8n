import {
	IDataObject,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';



export class ePayables implements INodeType {
	description: INodeTypeDescription = {
        
    }

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
        const returnData: IDataObject[] = [];
		
        return returnData;
    }


}