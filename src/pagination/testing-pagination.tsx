import { Button } from '../button';
import { Divider } from '../divider';
import { Label } from '../label';
import { Select } from '../select';
import { SelectTrigger } from '../select-trigger';

export function TestingPagination() {
    return (
        <nav
            className="br-pagination"
            aria-label="paginação"
            data-total="50"
            data-current="1"
            data-per-page="20"
        >
            <div className="pagination-per-page">
                <Select>
                    <SelectTrigger>
                        <label htmlFor="pagination-per-page">Exibir</label>
                        <SelectTrigger.Field id="pagination-per-page" />
                    </SelectTrigger>
                    <Select.List>
                        <Select.Item index={0} value="10">
                            10
                        </Select.Item>
                        <Select.Item index={1} value="20">
                            20
                        </Select.Item>
                        <Select.Item index={2} value="30">
                            30
                        </Select.Item>
                    </Select.List>
                </Select>
            </div>
            <Divider className="mx-3" vertical />
            <div className="flex items-center">
                <span className="current">1</span>&ndash;
                <span className="per-page">20</span>&nbsp;de&nbsp;
                <span className="total">50</span>&nbsp;itens
            </div>
            <div className="pagination-go-to-page d-none d-sm-flex ml-auto">
                <Select>
                    <SelectTrigger>
                        <label htmlFor="pagination-go-to-page">Página</label>
                        <SelectTrigger.Field id="pagination-go-to-page" />
                    </SelectTrigger>
                    <Select.List>
                        <Select.Item index={0} value="1">
                            1
                        </Select.Item>
                        <Select.Item index={1} value="2">
                            2
                        </Select.Item>
                        <Select.Item index={2} value="3">
                            3
                        </Select.Item>
                    </Select.List>
                </Select>
            </div>
            <span className="br-divider d-none d-sm-block mx-3"></span>
            <div className="pagination-arrows ml-auto ml-sm-0">
                <Button circle type="button" aria-label="Voltar página">
                    <i className="fas fa-angle-left" aria-hidden="true"></i>
                </Button>
                <Button circle type="button" aria-label="Página seguinte">
                    <i className="fas fa-angle-right" aria-hidden="true"></i>
                </Button>
            </div>
        </nav>
    );
}
